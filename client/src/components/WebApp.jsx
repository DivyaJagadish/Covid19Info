import React from "react";
import SimpleMap from "./map";
import Nav from "./Navigation.jsx";
import Card from "./StatComponents";
import PieChart from "./PieChart";
import useApplicationData from "./helpers/useApplicationData";
import DataContext from "./dataContext";
import CountryData from "./CountryDataCard";
import "../App.css";
import Textdata from "./Text";
export default function WebApp() {
	const { state, getdataforCountry } = useApplicationData();
	const data = {
		state,
		getdataforCountry,
	};
	return (
		<>
			<Nav />
			<Textdata
				data={"Click on the Country in the map to View covid -19 statistics "}
				id="Text"
			/>
			<DataContext.Provider value={data}>
				<p class="MapPIe">
					<p>
						<SimpleMap />
						<Card />
					</p>
					<p>
						<CountryData />
						<PieChart />
					</p>
				</p>
			</DataContext.Provider>
			Last updated : {Date(state.updated)}
		</>
	);
}
