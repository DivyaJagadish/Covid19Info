const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 8080;

const geoRev = require("geo-reverse");
const country = geoRev.country(19, 78);
console.log(country[0].name);

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
	res.json({ message: "Hello from server!" });
});

axios
	.get(`https://disease.sh/v3/covid-19/countries/ ${country[0].name}`)

	.then((result) => {
		console.log(result.data);
	})
	.catch((err) => console.log(err));

app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`);
});
