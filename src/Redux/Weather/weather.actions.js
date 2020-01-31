import WeatherActionTypes from "./weather.types";
import { getWeather } from "./weather.utils";

export const fetchWeatherRequest = () => {
	return {
		type: WeatherActionTypes.FETCH_WEATHER_REQUEST
	};
};

export const fetchWeatherReceive = weather => {
	return {
		type: WeatherActionTypes.FETCH_WEATHER_RECEIVE,
		payload: weather
	};
};

export const fetchWeatherFailure = error => {
	return {
		type: WeatherActionTypes.FETCH_WEATHER_FAILURE,
		payload: error
	};
};

export const fetchWeather = () => {
	return (dispatch, getState) => {
		const { weather, location } = getState();

		dispatch(fetchWeatherRequest());

		return getWeather(
			weather.API,
			weather.CallType,
			weather.KEY,
			location.location.coords.latitude,
			location.location.coords.longitude
		)
			.then(response => response.json())
			.then(data => {
				dispatch(fetchWeatherReceive(data));
			});
	};
};
