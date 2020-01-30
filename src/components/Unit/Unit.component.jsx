import React from "react";
import "./unit.styles.scss";
import Icon from "../Icon/Icon.component";
import Day from "../Day/Day.component";
import Temp from "../Temp/Temp.component";

class Unit extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			APIKEY: `${process.env.REACT_APP_KEY}`,
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
				this.setState({ location: position });
			})
			.then(() => {
				this.getWeather(
					this.state.location.coords.latitude,
					this.state.location.coords.longitude
				);
			})
			.catch(err => console.log(err.message));
	}

	render() {
		const weather = this.state.weather;

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
