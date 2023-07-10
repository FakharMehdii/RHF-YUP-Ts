import { createStore, applyMiddleware } from "redux";
import rootReducer from "/home/mergestack/Desktop/Fakhar Training/React/Form + Yup to Ts/my-redux-hook-form-ts-app/src/store/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "/home/mergestack/Desktop/Fakhar Training/React/Form + Yup to Ts/my-redux-hook-form-ts-app/src/sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;
