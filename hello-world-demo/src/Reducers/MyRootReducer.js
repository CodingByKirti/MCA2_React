// combine all the reducers here ... into one

import { combineReducers } from "redux";
import { IncDec } from "./IncDec";

export const rootReducer = combineReducers({
  IncDec,
  // other reducers , if any
});
