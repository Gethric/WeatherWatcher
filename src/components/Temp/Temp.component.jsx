import React from "react";
import "./temp.styles.scss";

const Temp = temp => (
	<div className="temp">
		<p>{temp.temp}</p>
	</div>
);

export default Temp;
