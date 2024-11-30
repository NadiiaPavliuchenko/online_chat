import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../node_modules/modern-normalize/modern-normalize.css";
import App from "./components/App/App";
import { RootStyles } from "./styles/rootStyles";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RootStyles />
    <App />
  </StrictMode>
);
