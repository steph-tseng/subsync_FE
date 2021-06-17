import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PublicNavbar from "./components/PublicNavbar";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

let theme = createMuiTheme({
  palette: {
    primary: {
      light: "#a3c0d6",
      main: "#7b99bd",
      dark: "#36558a",
      disabled: "#a1b3c2",
      hover: "#97b6cf",
      contrastText: "#000",
    },
    secondary: {
      main: "#1a2d4e",
    },
    tertiary: {
      light: "#d5daf9",
      main: "#6a75a3",
      dark: "#8b97cc",
      disabled: "#99a2c7",
      contrastText: "#fff",
    },
    text: {
      primary: "#000",
      secondary: "#fff",
    },
  },
  // typography: {
  //   fontFamily: ["Arvo", "Raleway"],
  // },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <PublicNavbar />

        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
