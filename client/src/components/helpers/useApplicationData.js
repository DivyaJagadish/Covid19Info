import axios from "axios";

export default function getdataforCountry(lat, longitude) {
	console.log("here");
	axios.get(`/api/lat=${lat}&&long=${longitude}`).then((result) => {
		console.log(result);
	});
}
