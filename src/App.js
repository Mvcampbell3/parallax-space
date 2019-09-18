import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home"

function App() {
  return (
    <div className="App fullPage">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/two">
            <Two />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function Two() {
  return (
    <div>
      Two
    </div>
  )
}

export default App;
