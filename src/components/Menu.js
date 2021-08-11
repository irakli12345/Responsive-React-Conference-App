import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./About";
import CodeOfConduct from "./CodeOfConduct";
import Accomodation from "./Accomodation";

function Menu() {
  return (
    <Router>
      {" "}
      <div>
        <Link to="/about">About Conference</Link>
        <Link to="/codeofconduct">Code of Conduct</Link>
        <Link to="/accomodation">Accomodation</Link>

        <Route path="/about" component={About} />
        <Route path="/codeofconduct" component={CodeOfConduct} />
        <Route path="/accomodation" component={Accomodation} />
      </div>
    </Router>
  );
}

export default Menu;
