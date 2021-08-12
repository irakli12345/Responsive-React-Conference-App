import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from "./components/Menu";
import TextLogo from "./components/TextLogo";
import About from "./components/About";
import CodeOfConduct from "./components/CodeOfConduct";
import Accomodation from "./components/Accomodation";
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
        <div className="body">
          {" "}
          <Route path="/about" exact component={About} />
          <Route path="/codeofconduct" exact component={CodeOfConduct} />
          <Route path="/accomodation" exact component={Accomodation} />
        </div>
      </div>
    </Router>
  );
}

export default App;
