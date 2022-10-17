import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Theme } from "./Theme/theme";

// import store from "./Store/Store";
// import { Provider } from "react-redux/es/exports";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </>
);
