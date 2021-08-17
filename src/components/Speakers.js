import { useEffect } from "react";
import Speaker from "./Speaker";
function Spakers({ list }) {
  return (
    <div className="body">
      <h1>The Speakers:</h1>
      <div className="speakersContainer">
        {list.map((listItem) => (
          <Speaker
            fullName={listItem.fullName}
            description={listItem.description}
            image={listItem.image}
            key={listItem.id}
          ></Speaker>
        ))}
      </div>
    </div>
  );
}

export default Spakers;
