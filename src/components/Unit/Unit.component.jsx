import React from "react";
import "./unit.styles.scss";
import { connect } from "react-redux";
import Icon from "../Icon/Icon.component";
import Day from "../Day/Day.component";
import Temp from "../Temp/Temp.component";
import { fetchLocation } from "../../Redux/Location/location.actions";
import { fetchWeather } from "../../Redux/Weather/weather.actions";

class Unit extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		const { fetchLocation, fetchWeather } = this.props;
		fetchLocation().then(() => fetchWeather());
	}

	render() {
		const weather = this.props;
		return weather ? (
			<div className="unit">
				<Icon weather_id={weather.weather.weather[0].id} />
				<Day day={weather.weather.dt} />
				<Temp temp={weather.weather.main.temp} />
			</div>
		) : null;
	}
}

const mapStateToProps = state => {
	return {
		weather: state.weather.weather
	};
};

const mapDispatchToProps = dispatch => ({
	fetchLocation: () => dispatch(fetchLocation()),
	fetchWeather: () => dispatch(fetchWeather())
});

export default connect(mapStateToProps, mapDispatchToProps)(Unit);
