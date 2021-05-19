import React from "react";

export const DateProg = () => {
  let currDate = new Date();
  currDate = currDate.getHours();
  let greetings = "";
  const cssStyle = {};

  const computeMessage = () => {
    if (currDate >= 1 && currDate < 12) {
      greetings = "Good Morning!!";
      cssStyle.color = "green";
    } else if (currDate >= 12 && currDate < 19) {
      greetings = "Good Afternoon!!";
      cssStyle.color = "orange";
    } else {
      greetings = "Good Night!!";
      cssStyle.color = "black";
    }
  };
  return (
    <div>
      <h1>
        {computeMessage()}
        Hello Sir <span style={cssStyle}>{greetings}</span>
      </h1>
    </div>
  );
};
