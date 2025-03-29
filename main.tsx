import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { HashRouter } from "react-router-dom";
import App from "./App";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <HashRouter> {/* Changed from BrowserRouter to HashRouter */}
      <App />
    </HashRouter>
  </StrictMode>
);
