import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import PageA from './pages/a';
import PageB from './pages/b'


export default () => (
    <Router>
      <div>
        <Route path="/a" component={PageA} />
        <Route path="/b" component={PageB} />
      </div>
    </Router>
  )