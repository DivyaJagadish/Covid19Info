import React from "react";
import SimpleMap from "./map";
import Nav from "./Navigation.jsx";
import Card from "./StatComponents";
import PieChart from "./PieChart";
import useApplicationData from "./helpers/useApplicationData";
import DataContext from "./dataContext";
import "../App.css";
export default function App() {
	const { state, getdataforCountry } = useApplicationData();
	const data = {
		state,
		getdataforCountry,
	};
	return (
		<>
			<Nav />
			Click on a Country to view Covid -19 Statistics of that Country
			<DataContext.Provider value={data}>
				<p class="MapPIe">
					<SimpleMap />
					<PieChart />
				</p>
				<Card />
			</DataContext.Provider>
		</>
	);
}
