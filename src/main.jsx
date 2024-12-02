import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../node_modules/modern-normalize/modern-normalize.css";
import App from "./components/App/App";
import { RootStyles } from "./styles/rootStyles";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="">
        <RootStyles />
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
