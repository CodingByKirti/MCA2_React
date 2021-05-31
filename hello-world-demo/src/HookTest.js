import React, { useState } from "react";

export const HookTest = () => {
  //   const [name, setName] = useState("Kirti");

  const [count, setCount] = useState(0);

  const changeCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1> {count} </h1>
      <button onClick={changeCount}> Click me</button>
    </div>
  );
};
