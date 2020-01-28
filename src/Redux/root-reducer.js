import { combineReducers } from "redux";
import locationReducer from "./Location/location.reducer";

const rootReducer = combineReducers({
	location: locationReducer
});

export default rootReducer;
