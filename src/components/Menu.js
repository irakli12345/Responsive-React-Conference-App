import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Menu() {
  return (
    <Router>
      {" "}
      <div className="primaryMenu">
        <Link to="/about">About Conference</Link>
        <Link to="/codeofconduct">Code of Conduct</Link>
        <Link to="/accomodation">Accomodation</Link>
      </div>
    </Router>
  );
}

export default Menu;
