import React from "react";
import "./unit.styles.scss";
import Icon from "../Icon/Icon.component";
import Day from "../Day/Day.component";
import Temp from "../Temp/Temp.component";

class Unit extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			APIKEY: "&APPID=05615a6a4a2bc606fbffb5d1676a40e0",
			APICall: "http://api.openweathermap.org/data/2.5/",
			APICallType: "weather?"
		};
	}

	getLocation() {
		if (!navigator.geolocation) {
			alert("Geolocation is not supported by your browser");
		} else {
			return new Promise(function(resolve, reject) {
				navigator.geolocation.getCurrentPosition(resolve, reject);
			});
		}
	}

	getWeather(lat, lon) {
		console.log(lat, lon);
		fetch(
			`${this.state.APICall}${this.state.APICallType}lat=${lat}&lon=${lon}&units=metric${this.state.APIKEY}`
		)
			.then(res => res.json())
			.then(data => {
				this.setState({ weather: data });
			})
			.catch(console.log);
	}

	componentDidMount() {
		this.getLocation()
			.then(position => {
				this.getWeather(position.coords.latitude, position.coords.longitude);
			})
			.catch(err => console.log(err.message));
	}

	render() {
		const weather = this.state.weather;
		console.log(this.state);

		return weather ? (
			<div className="unit">
				<Icon weather_id={weather.weather[0].id} />
				<Day day={weather.dt} />
				<Temp temp={weather.main.temp} />
			</div>
		) : null;
	}
}

export default Unit;
