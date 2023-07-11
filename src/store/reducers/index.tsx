//import { list } from "src/store/reducers/listReducer";
import { list } from "src/store/reducers/listReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  list,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
