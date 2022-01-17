import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { reducer as loginReducer } from "./login/reducer";
import { reducer as jobPostReducer } from "./jobPosting/reducer";
import thunk from "redux-thunk";

const root_reducer = combineReducers({
  login: loginReducer,
  allJobs: jobPostReducer,
});

export const store = createStore(root_reducer, applyMiddleware(thunk));
