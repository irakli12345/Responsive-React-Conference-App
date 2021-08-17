function HeaderForm() {
  return (
    <div className="header-form">
      <h1 id="tagline">Level Up Your React</h1>
      <input type="text" placeholder="Enter Your Name"></input>
      <select>
        <option selected>Choose the date</option>
        <option>14th of August</option>
        <option>15th of August</option>
        <option>16th of August</option>
      </select>
      <button className="button ticketButton">Buy a Ticket</button>
    </div>
  );
}

export default HeaderForm;
