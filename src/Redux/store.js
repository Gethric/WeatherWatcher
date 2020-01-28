import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./root-reducer";

const loggerMiddleware = createLogger();

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware))
);

export default store;
