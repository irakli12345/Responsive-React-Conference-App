import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from "./components/Menu";
import "./App.css";

function App() {
  const faker = require("faker");
  console.log(faker.name.firstName());
  return (
    <Router>
      {" "}
      <div className="App">
        <h1>Some important event</h1>
        <Menu></Menu>
      </div>
    </Router>
  );
}

export default App;
