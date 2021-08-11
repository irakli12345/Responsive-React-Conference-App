import { useState } from "react";
import About from "./components/About";
import CodeOfConduct from "./components/CodeOfConduct";
import Accomodation from "./components/Accomodation";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Some important event</h1>
      <About />
      <CodeOfConduct />
      <Accomodation />
    </div>
  );
}

export default App;
