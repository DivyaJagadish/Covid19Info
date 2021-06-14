const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 8080;

const geoRev = require("geo-reverse");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/lat=:lat&&long=:long", (req, res) => {
	var datadetails;
	console.log(req.params);
	const country = geoRev.country(req.params.lat, req.params.long);
	console.log(country[0].name);
	axios
		.get(`https://disease.sh/v3/covid-19/countries/ ${country[0].name}`)

		.then((result) => {
			datadetails = result.data;
		})
		.then(() => {
			console.log(datadetails);
			res.json({ message: datadetails });
		})
		.catch((err) => console.log(err));
});

app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`);
});
