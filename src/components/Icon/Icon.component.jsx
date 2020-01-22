import React from "react";
import "./icon.styles.scss";
import flash from "./Icons/sun.svg";
import umbrella from "./Icons/umbrella.svg";
import snow from "./Icons/snow.svg";
import broken from "./Icons/broken.svg";
import cloud from "./Icons/cloud.svg";
import sun from "./Icons/sun.svg";
import surprised from "./Icons/surprised.svg";

const Icon = id => {
	const show = {
		storm: flash,
		rain: umbrella,
		snow: snow,
		atmos: broken,
		clear: sun,
		cloudy: cloud,
		doh: surprised
	};

	let icon;

	if (id.weather_id >= 200 && id.weather_id < 300) {
		icon = show.storm;
	} else if (id.weather_id >= 300 && id.weather_id < 400) {
		icon = show.rain;
	} else if (id.weather_id >= 500 && id.weather_id < 600) {
		icon = show.rain;
	} else if (id.weather_id >= 600 && id.weather_id < 700) {
		icon = show.snow;
	} else if (id.weather_id >= 700 && id.weather_id < 800) {
		icon = show.atmos;
	} else if (id.weather_id === 800) {
		icon = show.clear;
	} else if (id.weather_id >= 800 && id.weather_id < 900) {
		icon = show.cloudy;
	} else {
		icon = surprised;
	}

	return (
		<div className="icon">
			<img src={icon} alt="Icon" />
		</div>
	);
};

export default Icon;
