import { Task } from "/home/mergestack/Desktop/Fakhar Training/React/typescript project/my-app/src/store/reducers/interface";
export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const ADD_TODO_STORE = "ADD_TODO_STORE";

export const startApp = () => {
  return {
    type:"START_APP",
  }
}

export const addTodo = (todo: string) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const addTodoInStore = (todo: Task) => {
  return {
    type: ADD_TODO_STORE,
    payload: todo,
  };
};

export const removeTodo = (todo: Task) => {
  return {
    type: REMOVE_TODO,
    payload: todo,
  };
};

export const editTodo = (todo: Task) => {
  return {
    type: EDIT_TODO,
    payload: todo,
  };
};
