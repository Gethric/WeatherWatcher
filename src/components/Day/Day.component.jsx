import React from "react";
import "./day.styles.scss";

const Day = day => {
	const date = Date(day);
	const now = date.split(" ");

	return (
		<div className="day">
			<p>{now[0]}</p>
		</div>
	);
};

export default Day;
