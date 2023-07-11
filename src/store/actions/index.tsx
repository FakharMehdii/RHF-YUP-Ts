import { ITask } from "src/interfaces";
export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_STORE = "UPDATE_STORE";

export const startApp = () => {
  return {
    type: "START_APP",
  };
};

export const addTodo = (todo: { taskTitle: string }) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const addTodoInStore = (todo: ITask) => {
  return {
    type: UPDATE_STORE,
    payload: todo,
  };
};

export const removeTodo = (todo: ITask) => {
  return {
    type: REMOVE_TODO,
    payload: todo,
  };
};

export const editTodo = (todo: ITask) => {
  return {
    type: EDIT_TODO,
    payload: todo,
  };
};
