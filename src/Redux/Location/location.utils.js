const getLocation = () => {
	if (!navigator.geolocation) {
		alert("Geolocation is not supported by your browser");
	} else {
		return new Promise(function(resolve, reject) {
			navigator.geolocation.getCurrentPosition(resolve, reject);
		});
	}
};

export default getLocation;
