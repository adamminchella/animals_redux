import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import searchReducer from "./reducers/searchReducer";

import animalsReducer from "./reducers/animalsReducer";

const store = createStore(
  combineReducers({
    search: searchReducer,
    animals: animalsReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
