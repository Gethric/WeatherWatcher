import React from "react";
import Unit from "./components/Unit/Unit.component";
import "./App.css";
import Geolocate from "./components/Geolocate/Geolocate.component";

const App = () => (
	<div className="app">
		<Unit />
		<Geolocate />
	</div>
);

export default App;
