import React from "react";
import "./now.styles.scss";
import Temp from "../Temp/Temp.component";
import Icon from "../Icon/Icon.component";
import Day from "../Day/Day.component";
import { connect } from "react-redux";
import { fetchWeather } from "../../Redux/Weather/weather.actions";

const Now = ({ fetchWeather, ...weather }) => {
	console.log(weather);
	return weather ? (
		<div className="now">
			<button onClick={fetchWeather}>Get Weather</button>
			<Icon weather_id={weather.weather.weather[0].id} />
			<Day day={weather.weather.dt} />
			<Temp temp={weather.weather.main.temp} />
		</div>
	) : null;
};

const mapDispatchToProps = dispatch => ({
	fetchWeather: () => dispatch(fetchWeather())
});

const mapStateToProps = state => {
	console.log(state);
	return {
		weather: state.weather.weather
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Now);
