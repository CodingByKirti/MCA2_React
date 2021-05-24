import React from "react";

export const FunComp = (props) => {
  return (
    <div>
      <h1> Hello {props.name} </h1>
      <h2> {props.children}</h2>
    </div>
  );
};
