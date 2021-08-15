function Speaker({ fullName, description, image }) {
  return (
    <div>
      <div className="head-and-img">
        <h1>{fullName}</h1>
        <img src={image}></img>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Speaker;
