import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from "./components/Menu";
import TextLogo from "./components/TextLogo";

import "./App.css";

function App() {
  const faker = require("faker");
  console.log(faker.name.firstName());
  return (
    <Router>
      {" "}
      <div className="App">
        <div className="top">
          {" "}
          <TextLogo></TextLogo>
          <Menu></Menu>
        </div>
      </div>
    </Router>
  );
}

export default App;
