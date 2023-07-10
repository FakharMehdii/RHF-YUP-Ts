import { list } from "/home/mergestack/Desktop/Fakhar Training/React/typescript project/my-app/src/store/reducers/listReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  list,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
