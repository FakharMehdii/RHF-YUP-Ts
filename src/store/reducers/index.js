import { combineReducers } from "redux";

const initialState = {
  tasks: [],
};

const list = (state = initialState, action) => {
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

export default rootReducer;
