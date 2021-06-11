import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { todoReducer } from "./reducers/todoReducer";

const appReducer = combineReducers({
  todoData: todoReducer,
});

export const store = createStore(appReducer, applyMiddleware(thunk));
