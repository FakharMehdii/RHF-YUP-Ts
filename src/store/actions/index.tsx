import { Task } from "../reducers";
export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const ADD_TODO_STORE = "ADD_TODO_STORE";

interface Props {
  task: Task;
}

export const addTodo = (todo: Props) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const addTodoInStore = (todo: Props) => {
  return {
    type: ADD_TODO_STORE,
    payload: todo,
  };
};

export const removeTodo = (todo: Props) => {
  return {
    type: REMOVE_TODO,
    payload: todo,
  };
};

export const editTodo = (todo: Props) => {
  return {
    type: EDIT_TODO,
    payload: todo,
  };
};
