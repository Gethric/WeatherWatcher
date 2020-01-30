import { combineReducers } from "redux";
import locationReducer from "./Location/location.reducer";
import weatherReducer from "./Weather/weather.reducer";

const rootReducer = combineReducers({
	location: locationReducer,
	weather: weatherReducer
});

export default rootReducer;
