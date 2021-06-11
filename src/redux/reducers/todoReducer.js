import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
} from "../../Utils/reduxActionTypeConst";

const intialState = {
  todos: [],
};

export const todoReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      let addTodos = [...state.todos];

      addTodos.push(action.todo);

      return {
        ...state,
        todos: addTodos,
      };
    case UPDATE_TODO:
      let updateTodos = [...state.todos];

      updateTodos[action.index] = action.todo;

      return {
        ...state,
        todos: updateTodos,
      };
    case DELETE_TODO:
      let deleteTodos = [...state.todos];

      deleteTodos.splice(action.index, 1);

      return {
        ...state,
        todos: deleteTodos,
      };
    default:
      return state;
  }
};
