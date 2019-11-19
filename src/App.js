import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import ContainerWrapper from "./components/ContainerWrapper";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
function App() {
  return (
    <Router>
      <ContainerWrapper>
        <Header />

        <Switch>
          <Route path="/about">
            <AboutMe />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
        <Footer />
      </ContainerWrapper>
    </Router>
  );
}

export default App;
