import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { REQUEST_LOCATION_DATA, receiveLocationData } from "./location.actions";
import { fetchData } from "./geoApi";

// worker Saga: will be fired on REQUEST_LOCATION_DATA actions
function* getLocationData(action) {
	try {
		const data = yield call(fetchData);
		yield put(receiveLocationData(data));
	} catch (e) {
		console.log(e);
	}
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
	yield takeLatest("REQUEST_LOCATION_DATA", getLocationData);
}

export default mySaga;
