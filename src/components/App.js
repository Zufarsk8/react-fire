import React, { Component } from "react";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from "../components/SignUp";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/signup" component={SignUp} />
      </Router>
    );
  }
}

export default App;
