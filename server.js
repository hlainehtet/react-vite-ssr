/* eslint-disable no-undef */
import fs from "fs";
import path from "path";
import express from "express";
import { createServer as createViteServer } from "vite";
import { Helmet } from "react-helmet";
import { renderToString } from "react-dom/server";
import React from "react";

const isProduction = process.env.NODE_ENV === "production";
const Port = process.env.PORT || 3000;
const Base = process.env.BASE || "/";

const templateHtml = isProduction
  ? fs.readFileSync("./dist/client/index.html", "utf-8")
  : "";

const ssrManifest = isProduction
  ? await fs.readFile("./dist/client/ssr-manifest.json", "utf-8")
  : undefined;

const app = express();
let vite;

// ? Add vite or respective production middlewares
if (!isProduction) {
  vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
  });

  app.use(vite.middlewares);
} else {
  const sirv = (await import("sirv")).default;
  const compression = (await import("compression")).default;
  app.use(compression());
  app.use(
    Base,
    sirv("./dist/client", {
      extensions: [],
      gzip: true,
    })
  );
}

app.use("*", async (req, res, next) => {
  // ! Favicon Fix
  if (req.originalUrl === "/favicon.ico") {
    return res.sendFile(path.resolve("./public/vite.svg"));
  }

  // ! SSR Render - Do not Edit if you don't know what heare whats going on
  let template, render;

  try {
    if (!isProduction) {
      template = fs.readFileSync(path.resolve("./index.html"), "utf-8");
      template = await vite.transformIndexHtml(req.originalUrl, template);
      render = (await vite.ssrLoadModule("/src/entry-server.tsx")).render;
    } else {
      template = templateHtml;
      render = (await import("./dist/server/entry-server.js")).render;
    }

    const helmet = Helmet.renderStatic();
    const rendered = await render({ path: req.originalUrl }, ssrManifest);
    const appContent = rendered ?? "";
    const html = template
      .replace("<!--helmet-title-->", helmet.title.toString())
      .replace("<!--helmet-meta-->", helmet.meta.toString())
      .replace("<!--helmet-link-->", helmet.link.toString())
      .replace("<!--app-html-->", appContent);

    res.status(200).setHeader("Content-Type", "text/html").end(html);
  } catch (error) {
    vite.ssrFixStacktrace(error);
    next(error);
  }
});

// ? Start http server
app.listen(Port, () => {
  console.log(`Server running on http://localhost:${Port}`);
});
