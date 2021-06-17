const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;

const geoRev = require("geo-reverse");
// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/lat=:lat&&long=:long", (req, res) => {
	var datadetails;
	const country = geoRev.country(req.params.lat, req.params.long);
	axios
		.get(`https://disease.sh/v3/covid-19/countries/ ${country[0].name}`)

		.then((result) => {
			datadetails = result.data;
		})
		.then(() => {
			res.json({ message: datadetails });
		})
		.catch((err) => console.log(err));
});

app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`);
});

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});
