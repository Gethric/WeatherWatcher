import React from "react";
import "./geolocate.styles.scss";
import { connect } from "react-redux";
import { fetchLocation } from "../../Redux/Location/location.actions";

const Geolocate = ({ fetchLocation, lat, lon }) => (
	<div className="get_location">
		<button onClick={fetchLocation}>Get Location</button>
		<span className="show_location">{lat}</span>
		<span className="show_location">{lon}</span>
	</div>
);

const mapDispatchToProps = dispatch => ({
	fetchLocation: () => dispatch(fetchLocation())
});

const mapStateToProps = state => {
	return {
		lat: state.location.location.coords.latitude,
		lon: state.location.location.coords.longitude
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Geolocate);
