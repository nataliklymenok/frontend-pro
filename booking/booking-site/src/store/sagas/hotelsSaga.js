import { call, put, takeLatest } from "redux-saga/effects";
import { getHotels } from "../../api/hotels";
import {
  fetchHotels,
  fetchHotelsSuccess,
  fetchHotelsFailure,
} from "../hotelsSlice";

function* fetchHotelsWorker(action) {
  try {
    const hotels = yield call(getHotels, action.payload);
    yield put(fetchHotelsSuccess(hotels));
  } catch (error) {
    yield put(fetchHotelsFailure(error.message));
  }
}

export default function* hotelsSaga() {
  yield takeLatest(fetchHotels.type, fetchHotelsWorker);
}
