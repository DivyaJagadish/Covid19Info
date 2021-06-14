import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
	const [state, setState] = useState({
		TotalCases: 0,
		ActiveCases: 0,
		RecoveredCases: 0,
		Totaldeath: 0,
		todayDeath: 0,
		NewCases: 0,
		todayRecovered: 0,
		CountryName: "",
	});
	function getdataforCountry(lat, longitude) {
		console.log("here");
		axios.get(`/api/lat=${lat}&&long=${longitude}`).then((result) => {
			setState((prev) => ({
				...prev,
				TotalCases: result.data.message.cases,
				ActiveCases: result.data.message.active,
				RecoveredCases: result.data.message.recovered,
				Totaldeath: result.data.message.deaths,
				todayDeath: result.data.message.todayDeaths,
				NewCases: result.data.message.todayCases,
				todayRecovered: result.data.message.todayRecovered,
				CountryName: result.data.message.country,
			}));
		});
	}

	return { state, getdataforCountry };
}
