function Homepage() {
  return (
    <div class="home">
      <h1 id="tagline">Level Up Your React</h1>
      <label class="custom-field">
        {" "}
        <span className="placeholder">Enter your name</span>
        <input type="text"></input>
      </label>
      <label class="custom-field">
        {" "}
        <span className="placeholder">Select the Date</span>
        <select></select>
      </label>
      <button className="button ticketButton">Buy a Ticket</button>
    </div>
  );
}

export default Homepage;
