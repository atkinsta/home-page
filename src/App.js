import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ResumePage from "./pages/ResumePage";
import "./App.css"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/resume" component={ResumePage} />
          {/* <Route exact path="/home" component={HomePage} />
          <Route exact path="/resume" component={ResumePage} /> */}
          {/* <Route exact path="/portfolio" component={PortfolioPage} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
