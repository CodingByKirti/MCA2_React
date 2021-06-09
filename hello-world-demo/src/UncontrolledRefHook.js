import React, { useRef, useState } from "react";

export const UncontrolledRefHook = () => {
  const myref = useRef(null);
  const [filled, setFilled] = useState(false);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    let name = myref.current.value;
    name === "" ? alert("plz enter your name") : setFilled(true);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        Name : <input type="text" ref={myref} />
        <button type="submit">Submit</button>
        {filled
          ? `hello ${myref.current.value} you have successfully registered`
          : ""}
      </form>
    </div>
  );
};
