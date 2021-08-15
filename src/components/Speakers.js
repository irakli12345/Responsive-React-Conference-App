import { useEffect } from "react";

function Spakers({ list }) {
  return (
    <div>
      {list.map((listItem) => (
        <h1>{listItem.fullName}</h1>
      ))}
    </div>
  );
}

export default Spakers;
