import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Light from "./styles/themes/light";
import flexComponent from "./hoc/flexComponent";
import Navbar from "./components/navbar";
import Home from "./components/home";
import NotFound from "./components/notFound";

function App() {
  return (
    <ThemeProvider theme={Light}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={flexComponent(Home)} />
          <Route path="/not-found" component={flexComponent(NotFound)} />
          <Redirect to="/not-found" />
        </Switch>
        <Navbar />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
