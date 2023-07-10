export interface ListState {
  tasks: Task[];
}

export interface Task {
  _id: string;
  taskTitle: string;
}

export interface AddTodoAction {
  type: "ADD_TODO_STORE";
  payload: Task[];
}

export interface EditTodoAction {
  type: "EDIT_TODO";
  payload: Task;
}
export interface RemoveTodoAction {
  type: "REMOVE_TODO";
  payload: Task;
}

export type ListActionTypes = AddTodoAction | EditTodoAction | RemoveTodoAction;
