import WeatherActionTypes from "./weather.types";
import WEATHER_DATA from "./weather.data";

const INITIAL_STATE = {
	KEY: "&APPID=05615a6a4a2bc606fbffb5d1676a40e0",
	API: "http://api.openweathermap.org/data/2.5/",
	CallType: "weather?",
	isFetching: false,
	errorMessage: undefined,
	weather: WEATHER_DATA
};

const weatherReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case WeatherActionTypes.FETCH_WEATHER_REQUEST:
			return {
				...state,
				isFetching: true,
				coords: state.weather.coord
			};
		case WeatherActionTypes.FETCH_WEATHER_RECEIVE:
			return {
				...state,
				isFetching: false,
				weather: action.payload
			};
		case WeatherActionTypes.FETCH_WEATHER_FAILURE:
			return {
				...state,
				isFetching: false,
				errorMessage: action.payload
			};

		default:
			return state;
	}
};

export default weatherReducer;
