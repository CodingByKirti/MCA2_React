// One Centralized store\
// whoever will call store ... will get access to rootReducer

import { createStore } from "redux";
import { rootReducer } from "./Reducers/MyRootReducer";

export const store = createStore(rootReducer);
