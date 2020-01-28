import { getWeather } from "./weather.utils";

const INITIAL_STATE = {
	APIKEY: "&APPID=05615a6a4a2bc606fbffb5d1676a40e0",
	APICall: "http://api.openweathermap.org/data/2.5/",
	APICallType: "weather?"
};

const weatherReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "GET_WEATHER":
			return {
				state,
				location: getWeather()
			};
	}
};

export default weatherReducer;
