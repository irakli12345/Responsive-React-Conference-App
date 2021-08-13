import { useEffect } from "react";

function Spakers() {
  useEffect(
    () =>
      fetch("http://localhost:3000/speakers")
        .then((res) => res.json())
        .then((returnedData) => console.log(returnedData)),
    []
  );
  return <div></div>;
}

export default Spakers;
