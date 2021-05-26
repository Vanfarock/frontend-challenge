import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Light from "./styles/themes/light";
import ThemeContext from "./context/themeContext";
import flexComponent from "./hoc/flexComponent";
import Navbar from "./components/navbar";
import Home from "./components/home";
import NotFound from "./components/notFound";

function App() {
  return (
    <ThemeContext.Provider
      value={{
        theme: Light,
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={flexComponent(Home)} />
          <Route path="/not-found" component={flexComponent(NotFound)} />
          <Redirect to="/not-found" />
        </Switch>
        <Navbar />
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
