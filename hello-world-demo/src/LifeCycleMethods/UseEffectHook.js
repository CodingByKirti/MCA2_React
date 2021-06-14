import React, { useEffect, useState } from "react";

export const UseEffectHook = () => {
  const [inc, setInc] = useState(0);
  const [dec, setDec] = useState(100);
  // useEffect(() => alert("hello button is clicked"));    // gets called after every render

  //   useEffect(() => alert("hello button is clicked"), []); // gets called initial render
  useEffect(() => alert("hello button is clicked"), [inc]); // gets called everytime when inc comp
  // gets  rendered

    // useEffect(what is to be executed ,when to execute)
    //           (fun())  // everytime .. render/ update
    //           (fun(),[]) // only one time , initial render
    //           (fun(),[inc,value,counter])

  return (
    <div>
      <button onClick={() => setInc(inc + 1)}>Click me {inc}</button> <hr />
      <button onClick={() => setDec(dec - 1)}>Click me {dec}</button>
    </div>
  );
};
