import { ListState } from "src/store/reducers/interface";
import { Reducer } from "redux";
import { ListActionTypes } from "src/store/reducers/interface";

const initialState: ListState = {
  tasks: [],
};

export const list: Reducer<ListState, ListActionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "UPDATE_STORE": {
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
    case "ADD_TODO": {
      return {
        tasks: [...state.tasks, action.payload],
      };
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
