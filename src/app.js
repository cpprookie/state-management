import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import PageA from './components/a';
import PageB from './components/b'


export default () => (
    <Router>
      <div>
        <Route path="/a" component={PageA} />
        <Route path="/b" component={PageB} />
      </div>
    </Router>
  )