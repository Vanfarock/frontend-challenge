import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyle";
import Light from "./styles/themes/light";
import FlexComponent from "./hoc/flexComponent";
import WithNavbar from "./hoc/withNavbar";
import Home from "./components/home";
import NotFound from "./components/notFound";
import BookDetails from "./components/bookDetails/index";

function App() {
  return (
    <ThemeProvider theme={Light}>
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <WithNavbar
                Component={Home}
                searchKey={Date.now().toString()}
                {...props}
              />
            )}
          />
          <Route
            path="/books/:id"
            render={(props) => (
              <FlexComponent Component={BookDetails} {...props} />
            )}
          />
          <Route
            path="/not-found"
            render={(props) => <WithNavbar Component={NotFound} {...props} />}
          />
          <Redirect to="/not-found" />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
