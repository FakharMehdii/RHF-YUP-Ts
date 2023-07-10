import { ListState } from "/home/mergestack/Desktop/Fakhar Training/React/Form + Yup to Ts/my-redux-hook-form-ts-app/src/store/reducers/interface";
import { Reducer } from "redux";
import { ListActionTypes } from "/home/mergestack/Desktop/Fakhar Training/React/Form + Yup to Ts/my-redux-hook-form-ts-app/src/store/reducers/interface";


const initialState: ListState = {
  tasks: [],
};

export const list: Reducer<ListState, ListActionTypes> = (
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
    case "EDIT_TODO": {
      const updatedTasks = state.tasks;
      updatedTasks.forEach((task, index) => {
        if (task._id === action.payload._id)
          task.taskTitle = action.payload.taskTitle;
      });
      return { ...state, tasks: updatedTasks };
    }
    case "REMOVE_TODO": {
      const updatedTasks = state.tasks.filter(
        (task, index) => task._id !== action.payload._id
      );
      return {
        ...state,
        tasks: updatedTasks,
      };
    }
    default:
      return state;
  }
};
