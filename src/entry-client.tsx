import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";

import Router from "./router";

ReactDOM.hydrateRoot(
  document.getElementById("app") as HTMLElement,
  <HelmetProvider>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </HelmetProvider>
);
