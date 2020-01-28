import LocationActionTypes from "./location.types";
import { LOCATION_DATA } from "./location.data";

const INITIAL_STATE = {
	isFetching: false,
	errorMessage: undefined,
	location: LOCATION_DATA
};

const locationReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case LocationActionTypes.FETCH_LOCATION_REQUEST:
			return {
				...state,
				isFetching: true
			};
		case LocationActionTypes.FETCH_LOCATION_RECEIVE:
			return {
				...state,
				isFetching: false,
				location: action.payload
			};
		case LocationActionTypes.FETCH_LOCATION_FAILURE:
			return {
				...state,
				isFetching: false,
				errorMessage: action.payload
			};

		default:
			return state;
	}
};

export default locationReducer;
