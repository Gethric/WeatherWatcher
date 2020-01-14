import React from "react";
import "./icon.styles.scss";

const Icon = icon => (
	<div className="icon">
		<img src={icon.icon} alt="Icon" />
	</div>
);

export default Icon;
