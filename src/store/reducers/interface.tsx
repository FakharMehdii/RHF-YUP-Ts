import { ITask } from "src/interfaces";

export interface ListState {
  tasks: ITask[];
}

export interface IAddTodoAction {
  type: "ADD_TODO";
  payload: ITask;
}

export interface IUpdateStoreAction {
  type: "UPDATE_STORE";
  payload: ITask[];
}

export interface IEditTodoAction {
  type: "EDIT_TODO";
  payload: ITask;
}
export interface IRemoveTodoAction {
  type: "REMOVE_TODO";
  payload: ITask;
}

export type ListActionTypes =
  | IUpdateStoreAction
  | IEditTodoAction
  | IRemoveTodoAction
  | IAddTodoAction;
