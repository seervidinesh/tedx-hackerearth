import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import MainFooter from "./components/MainFooter";
import MainHeader from "./components/MainHeader";
import HomePage from "./pages/HomePage";

import AllEvent from "./components/AllEvents";
import EventDetail from "./components/EventDetail";

function App() {
  return (
    <div className="App">
      <MainHeader />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/all-events" component={AllEvent} />
        <Route exact path="/all-events/:eventId" component={EventDetail} />
      </Switch>
      <MainFooter />
    </div>
  );
}

export default App;
