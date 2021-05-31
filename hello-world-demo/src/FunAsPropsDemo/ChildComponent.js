import React from "react";

function ChildComponent(props) {
  return (
    <div>
      {props.data}
      <button onClick={() => props.greetHandler("child")}>Greet Parent</button>
    </div>
  );
}

export default ChildComponent;
