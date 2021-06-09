import React from "react";

export const Data = (props) => {
  return (
    <div>
      <ul>
        {props.data.map((d) => (
          <li>{d.name}</li>
        ))}
      </ul>
    </div>
  );
};
