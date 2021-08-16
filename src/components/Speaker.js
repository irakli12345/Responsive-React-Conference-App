function Speaker({ fullName, description, image }) {
  return (
    <div className="speaker">
      <div className="card-img">
        <img src={image}></img>
      </div>
      <div className="card-content">
        <h1>{fullName}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Speaker;
