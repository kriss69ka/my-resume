import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Main } from "./components/Main";
import { SignIn } from "./components/SignIn";
import { useSelector } from "react-redux";

import ContainerWrapper from "./components/ContainerWrapper";
import Footer from "./components/Footer";
import EditPage from "./components/EditPage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";

function App() {
  const registred = useSelector(state => state.registred);
  const firebaseUser = useSelector(state => state.firebaseUser);
  const firebaseUidFromUrl = window.location.pathname.split("/")[2];
  const id = firebaseUidFromUrl || (firebaseUser && firebaseUser.uid);

  return (
    <Router>
      <ContainerWrapper>
        <Route path="/:path">
          <Header uid={id} />
        </Route>
        <Switch>
          <Route path="/about">
            <AboutMe />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/main">
            <Main uid={id} />
          </Route>
          <Route path="/edit">
            <EditPage />
          </Route>
        </Switch>
        <Route path="/:path">
          <Footer uid={id} />
        </Route>
        <Route exact path="/">
          {registred ? <Redirect to={`/main/${id}`} /> : <SignIn />}
        </Route>
      </ContainerWrapper>
    </Router>
  );
}

export default App;
