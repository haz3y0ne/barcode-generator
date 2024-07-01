import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ConfigProvider } from "./context/ConfigContext.jsx";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { bCodeProTheme } from "./theme/bCodeProTheme.js";
import { CssBaseline } from "@mui/material";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MuiThemeProvider theme={bCodeProTheme}>
      <CssBaseline />
      <StyledThemeProvider theme={bCodeProTheme}>
        <ConfigProvider>
          <App />
        </ConfigProvider>
      </StyledThemeProvider>
    </MuiThemeProvider>
  </React.StrictMode>
);
