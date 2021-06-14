// how those actions will be performed
// state, action
import React from "react";

const initialState = 0;
export const IncDec = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
