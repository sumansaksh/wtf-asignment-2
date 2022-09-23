import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { gymReducer, planReducer } from "./redux/reducers/gymReducer";

import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  gyms: gymReducer,
  plans: planReducer,
});

let initialState = {};

const middleware = [thunk];

const store = legacy_createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
