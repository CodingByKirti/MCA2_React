import React from "react";

export const DateComp = (props) => {
  // let {x,y}=props

  const currDate = new Date().toDateString();
  const currTime = new Date().toTimeString();
  return (
    <>
      <h1>
        Hello {props.name} and {props.data} is {currDate} == {currTime}
      </h1>
    </>
  );
};

// function DateComp(props) {
//   return (
//     <>
//       <h1>Hello</h1>
//     </>
//   );
// }
