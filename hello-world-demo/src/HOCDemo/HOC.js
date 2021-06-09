import React from "react";

export const HOC = (props) => {
  return (
    <div>
      <h2>
        Component under modification
        <props.comp />
      </h2>
    </div>
  );
};
