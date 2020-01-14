import React from "react";
import "./unit.styles.scss";
import Icon from "../Icon/Icon.component";
import Day from "../Day/Day.component";
import Temp from "../Temp/Temp.component";
import sun from "../Icon/Icons/sun.svg";

class Unit extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			APIKEY: "&APPID=05615a6a4a2bc606fbffb5d1676a40e0",
			APICall: "http://api.openweathermap.org/data/2.5/",
			APICallType: "weather?", // Later will be dependend on input box
			id: "id=3998655", // Leon city ID
			icon: sun,
			date: "Date",
			temp: "30C"
		};
	}

	componentDidMount() {
		fetch(
			`${this.state.APICall}${this.state.APICallType}${this.state.id}&units=metric${this.state.APIKEY}`
		)
			.then(res => res.json())
			.then(data => {
				this.setState({ weather: data });
				console.log(this.state.weather);
			})
			.catch(console.log);
	}

	render() {
		const weather = this.state.weather;

		return weather ? (
			<div className="unit">
				<Icon icon={this.state.icon} />
				<Day day={weather.dt} />
				<Temp temp={weather.main.temp} />
			</div>
		) : null;
	}
}

export default Unit;
