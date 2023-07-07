import { Reducer } from "redux";
import { combineReducers } from "redux";

interface ListState {
  tasks: Task[];
}

export interface Task {
  _id: string;
  taskTittle: string;
}

interface AddTodoAction {
  type: "ADD_TODO_STORE";
  payload: Task[];
}

type ListActionTypes = AddTodoAction;

const initialState: ListState = {
  tasks: [],
};

const list: Reducer<ListState, ListActionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "ADD_TODO_STORE": {
      return {
        ...state,
        tasks: action.payload,
      };
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  list,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

// import { type } from "os";
// import { Reducer } from "react";
// import { combineReducers } from "redux";

// interface ListState {
//     tasks: string[];
// }

// interface Task {
//     _id: string;
//     taskTittle: string;
// }

// interface AddTodoAction {
//   type: "ADD_TODO_STORE";
//   payload: Task[];
// }
// type ListActionTypes = AddTodoAction;

// const initialState: ListState = {
//   tasks: [],
// };

// const list: Reducer<ListState, AddTodoAction> = (state: ListState = initialState, action: ListActionTypes) => {
//   switch (action.type) {
//     case "ADD_TODO_STORE": {
//       return {
//         ...state,
//         tasks: action.payload,
//       };
//     }
//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   list,
// });
// export type {ListState};
// export type RootState = ReturnType<typeof rootReducer>;

// export default rootReducer;
