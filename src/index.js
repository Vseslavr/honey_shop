import React from "react";
import ReactDOM from "react-dom";
import "./index.sass";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./redux/store";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { amber } from "@material-ui/core/colors";

const theme = createMuiTheme({
  typography: {
    fontSize: 12,

    body2: {
      fontFamily: "Merienda",
      fontSize: "4rem",
      fontWeight: "bold",
    },
    subtitle2: {
      fontSize: "1rem",
      fontStyle: "italic",
    },
    h2: {
      fontFamily: "Merienda",
      fontSize: "2.5rem",
      fontWeight: "bold",
    },
    h6: {
      fontSize: "0.8rem",
    },
  },

  palette: {
    background: {
      paper: "#fff",
      default: "#ffd835",
    },
    primary: {
      main: amber[600],
      light: amber[500],
      dark: amber[700],
    },
    secondary: {
      main: amber[900],
      light: amber[700],
      dark: amber[800],
    },
    text: {
      primary: "#61422E",
      // secondary: "#fff",
      // disabled: "#bdbdbd",
    },
    hover: amber[900],
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
