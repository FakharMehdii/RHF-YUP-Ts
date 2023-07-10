import axios from "axios";
import { takeEvery, call, all, put } from "redux-saga/effects";
import { addTodoInStore } from "/home/mergestack/Desktop/Fakhar Training/React/typescript project/my-app/src/store/actions";

interface Action {
  type: string;
  payload: { _id: string; taskTitle: string };
}
interface addAction {
  type: string;
  payload: { taskTitle: string };
}
function* createTodoSaga(action: addAction): Generator {
  try {
    const crudUrl = process.env.REACT_APP_CRUD_ENDPOINT_URL || "";
    const response: any = yield call(axios.post, crudUrl, action.payload);
    yield call(updateStore);
  } catch (error) {
    console.error(error);
  }
}

function* updateStore(): Generator {
  try {
    const crudUrl = process.env.REACT_APP_CRUD_ENDPOINT_URL || "";
    const response: any = yield call(axios.get, crudUrl);
    yield put(addTodoInStore(response.data));
  } catch (error) {
    console.error(error);
  }
}

function* removeTodoSaga(action: Action): Generator {
  try {
    let crudUrl = process.env.REACT_APP_CRUD_ENDPOINT_URL;
    crudUrl = crudUrl + "/" + action.payload._id;
    const response: any = yield call(axios.delete, crudUrl);
  } catch (error) {
    console.error(error);
  }
}

function* editTodoSaga(action: Action): Generator {
  try {
    let crudUrl = process.env.REACT_APP_CRUD_ENDPOINT_URL;
    crudUrl = crudUrl + "/" + action.payload._id;
    const response: any = yield call(axios.put, crudUrl, {
      taskTitle: action.payload.taskTitle,
    });
  } catch (error) {
    console.error(error);
  }
}

function* startAppSaga() {
  try {
    yield call(updateStore);
  } catch (error) {
    console.error(error);
  }
}

function* watchStartApp() {
  yield takeEvery("START_APP", startAppSaga);
}

function* watchAddTodo() {
  yield takeEvery("ADD_TODO", createTodoSaga);
}

function* watchRemoveTodo() {
  yield takeEvery("REMOVE_TODO", removeTodoSaga);
}

function* watchEditTodo() {
  yield takeEvery("EDIT_TODO", editTodoSaga);
}

export default function* rootSaga() {
  yield all([
    watchAddTodo(),
    watchRemoveTodo(),
    watchEditTodo(),
    watchStartApp(),
  ]);
}
