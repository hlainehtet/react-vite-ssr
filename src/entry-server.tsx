import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import Router from "./router";
import { HelmetProvider } from "react-helmet-async";

interface IRenderProps {
  path: string;
}

export const render = ({ path }: IRenderProps) => {
  return ReactDOMServer.renderToString(
    <HelmetProvider>
      <StaticRouter location={path}>
        <Router />
      </StaticRouter>
    </HelmetProvider>
  );
};
