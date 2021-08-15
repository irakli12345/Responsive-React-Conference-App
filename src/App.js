import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from "./components/Menu";
import TextLogo from "./components/TextLogo";
import About from "./components/About";
import CodeOfConduct from "./components/CodeOfConduct";
import Accomodation from "./components/Accomodation";
import Homepage from "./components/Homepage";
import Speakers from "./components/Speakers";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  useEffect(
    () =>
      fetch("http://localhost:3000/speakers")
        .then((res) => res.json())
        .then((returnedData) => setList(returnedData)),
    []
  );
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
          <Route path="/" exact component={Homepage} />
          <Route path="/about" exact component={About} />
          <Route path="/codeofconduct" exact component={CodeOfConduct} />
          <Route path="/accomodation" exact component={Accomodation} />
        </div>
        <div className="newBody">
          <Speakers list={list}></Speakers>
        </div>
      </div>
    </Router>
  );
}

/* Switch body to header, that would be better. and homepage component's name too, make it header. make new body out of speakers. */
/* I should be able to post Buy Ticket Data, so that it is visible in the dashboard, where I can change speakers too*/
/* Add 4 speakers on 2 lines. On small screens, 1 speaker on a line with whitespace around it */
/* install json-server for fake data and faker.js to generate the fake data, or do without faker*/

export default App;
