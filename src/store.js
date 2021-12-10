import { createStore } from "redux";
import { rootReducer } from "./redux";

export const store = createStore(rootReducer);
