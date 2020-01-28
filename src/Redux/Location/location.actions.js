import LocationActionTypes from "./location.types";
import getLocation from "./location.utils";

export const fetchLocationRequest = () => {
	return {
		type: LocationActionTypes.FETCH_LOCATION_REQUEST
	};
};

export const fetchLocationReceive = coords => {
	return {
		type: LocationActionTypes.FETCH_LOCATION_RECEIVE,
		payload: coords
	};
};

export const fetchLocationFailure = error => {
	return {
		type: LocationActionTypes.FETCH_LOCATION_FAILURE,
		payload: error
	};
};

export function fetchLocation() {
	return dispatch => {
		dispatch(fetchLocationRequest());

		return getLocation().then(position =>
			dispatch(fetchLocationReceive(position))
		);
	};
}
