import React from "react";
import "./home.styles.scss";

class Home extends React.component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="home">
				<Now />
				<Week />
			</div>
		);
	}
}

export default Home;
