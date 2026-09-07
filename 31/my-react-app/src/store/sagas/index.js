import { delay, put, takeEvery } from "redux-saga/effects";
import {
  addAsync,
  addTodo,
  deleteAsync,
  deleteTodo,
  toggleAsync,
  toggleTodo,
} from "../todoSlice";

function* addAsyncSaga(action) {
  yield delay(1000);
  yield put(addTodo(action.payload));
}

function* toggleAsyncSaga(action) {
  yield delay(1000);
  yield put(toggleTodo(action.payload));
}

function* deleteAsyncSaga(action) {
  yield delay(1000);
  yield put(deleteTodo(action.payload));
}

export default function* rootSaga() {
  yield takeEvery(addAsync.type, addAsyncSaga);
  yield takeEvery(toggleAsync.type, toggleAsyncSaga);
  yield takeEvery(deleteAsync.type, deleteAsyncSaga);
}
