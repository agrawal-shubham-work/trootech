import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../../Utils/reduxActionTypeConst";

export const addTodoAction = (todo) => {
  return {
    type: ADD_TODO,
    todo,
  };
};

export const updateTodoAction = (todo, index) => {
  return {
    type: UPDATE_TODO,
    todo,
    index,
  };
};

export const deleteTodoAction = (index) => {
  return {
    type: DELETE_TODO,
    index,
  };
};
