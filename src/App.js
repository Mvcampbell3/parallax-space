import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home"
import Rovers from "./components/Rovers";

function App() {
  return (
    <div className="App fullPage">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/two">
            <Rovers />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
