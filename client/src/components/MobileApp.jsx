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
 import ScrollToTop from "react-scroll-to-top";
export default function MobileApp() {
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
						<SimpleMap />
						<CountryData />
            	<Card />
						<PieChart />
            <ScrollToTop smooth height ={80} />
				</p>
			</DataContext.Provider>
			Last updated : {Date(state.updated)}
		</>
	);
}
