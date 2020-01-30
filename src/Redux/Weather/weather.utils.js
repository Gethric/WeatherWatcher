export const getWeather = (API, CallType, KEY, lat, lon) => {
	return fetch(`${API}${CallType}lat=${lat}&lon=${lon}&units=metric${KEY}`);
};
