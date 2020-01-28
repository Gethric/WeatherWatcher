export const getWeather = (lat, lon) => {
	console.log(lat, lon);
	fetch(
		`${this.state.APICall}${this.state.APICallType}lat=${lat}&lon=${lon}&units=metric${this.state.APIKEY}`
	)
		.then(res => res.json())
		.then(data => {
			this.setState({ weather: data });
		})
		.catch(console.log);
};
