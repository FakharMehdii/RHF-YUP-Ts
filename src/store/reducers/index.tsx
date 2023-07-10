import { list } from "/home/mergestack/Desktop/Fakhar Training/React/Form + Yup to Ts/my-redux-hook-form-ts-app/src/store/reducers/listReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  list,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
