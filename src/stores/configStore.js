import { createStore } from "redux";
import factorReducer from "../reducers/factorReducer";

export default function (initialState) {
  return createStore(factorReducer, initialState);
}
