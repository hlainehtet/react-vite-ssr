import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import vercel from "vite-plugin-vercel";

export default defineConfig({
  plugins: [react(), vercel()],
  ssr: {
    external: ["react-router-dom"],
    noExternal: ["react-helmet-async"],
  },

  resolve: {
    alias: {
      "@App": path.resolve(process.cwd(), "src"),
      "@Components": path.resolve(process.cwd(), "src/Components"),
      "@Pages": path.resolve(process.cwd(), "src/pages"),
      "@Styles": path.resolve(process.cwd(), "src/Styles"),
      "@Public": path.resolve(process.cwd(), "public"),
    },
  },
});
