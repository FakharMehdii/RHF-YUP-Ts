import { combineReducers } from "redux";
import { list } from "src/store/reducers/listReducer";

export const rootReducer = combineReducers({
  list,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
