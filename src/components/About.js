import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>Name of the event</h1>
      <p>Description</p>
      <p>Date</p>
      <p>Location</p>
      <Link to="/">Go back to homepage </Link>
    </div>
  );
}

export default About;
