import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>
        <header>
          <Link to="/">Home</Link>
          <Link to="/two">Two</Link>
        </header>
        <Switch>
          <Route exact path="/">
            <One />
          </Route>
          <Route exact path="/two">
            <Two />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function One() {
  return (
    <div>
      One
    </div>
  )
}

function Two() {
  return (
    <div>
      Two
    </div>
  )
}

export default App;
