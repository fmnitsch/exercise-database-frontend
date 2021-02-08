import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "../Home/Home";
import Edit from "../Edit/Edit";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/edit" component={Edit} />
      </div>
    </Router>
  );
}

export default App;
