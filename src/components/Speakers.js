import { useEffect } from "react";
import Speaker from "./Speaker";
function Spakers({ list }) {
  return (
    <div>
      {list.map((listItem) => (
        <Speaker
          fullName={listItem.fullName}
          description={listItem.description}
          image={listItem.image}
          key={listItem.id}
        ></Speaker>
      ))}
    </div>
  );
}

export default Spakers;
