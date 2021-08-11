import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";
import CodeOfConduct from "./components/CodeOfConduct";
import Accomodation from "./components/Accomodation";
import "./App.css";

function App() {
  return (
    <Router>
      {" "}
      <div className="App">
        <h1>Some important event</h1>
        <Route path="/about" component={About} />
        <Route path="/codeofconduct" component={CodeOfConduct} />
        <Route path="/accomodation" component={Accomodation} />
      </div>
    </Router>
  );
}

export default App;
