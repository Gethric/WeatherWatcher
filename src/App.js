import React from "react";
import Unit from "./components/Unit/Unit.component";
import "./App.css";
import Geolocate from "./components/Geolocate/Geolocate.component";
import Now from "./components/Now/Now.component";

const App = () => (
	<div className="app">
		<Unit />
		<Geolocate />
		<Now />
	</div>
);

export default App;
