import axios from "axios";
import {takeEvery, call, all, put } from "redux-saga/effects";
import { addTodoInStore } from "../store/actions";
import { AxiosResponse } from "axios";

import React from "react";

interface Action {
  payload: { _id: string, name: string };
}

function* createTodoSaga(
  action: Action
): Generator<any, void, AxiosResponse<any>> {
  try {
    const crudUrl = process.env.REACT_APP_CRUD_ENDPOINT_URL;
    const response: AxiosResponse<any> = yield call(
      [axios, "post"],
      crudUrl,
      action.payload
    );
    yield call(updateStore);
  } catch (error) {
    console.error(error);
  }
}

function* updateStore(): Generator<void, void, unknown> {
  try {
    const crudUrl = process.env.REACT_APP_CRUD_ENDPOINT_URL;
    const response:any = yield call(axios.get, crudUrl);
    yield put(addTodoInStore(response.data));
  } catch (error){
    console.error(error);
  }
}

function* removeTodoSaga(action: Action): Generator<void, void, unknown> {
  try {
    let crudUrl = process.env.REACT_APP_CRUD_ENDPOINT_URL;
    crudUrl = crudUrl + "/" + action.payload._id;
    const response = yield call(axios.delete, crudUrl);
    yield call(updateStore);
  } catch (error) {
    console.error(error);
  }
}

function* editTodoSaga(action: Action): Generator<void, void, unknown> {
  try {
    let crudUrl = process.env.REACT_APP_CRUD_ENDPOINT_URL;
    crudUrl = crudUrl + "/" + action.payload._id;
    const response = yield call(axios.put, crudUrl, {
      name: action.payload.name,
    });
    yield call(updateStore);
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
