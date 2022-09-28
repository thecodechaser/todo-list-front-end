import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import todoReducer from "./todos/todos";

const reducer = combineReducers({
  todoReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
