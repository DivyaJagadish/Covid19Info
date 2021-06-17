import React from "react";
import SimpleMap from "./map";
import Nav from "./Navigation.jsx";
import Card from "./StatComponents";
import PieChart from "./PieChart";
import useApplicationData from "./helpers/useApplicationData";
import DataContext from "./dataContext";
import "../App.css";
import Textdata from "./Text";
export default function App() {
	const { state, getdataforCountry } = useApplicationData();
	const data = {
		state,
		getdataforCountry,
	};
	return (
		<>
			<Nav />
			<Textdata
				data={"Click on the Country to show covid -19 statistics"}
				id="Text"
			/>
			<DataContext.Provider value={data}>
				<p class="MapPIe">
					<SimpleMap />
					<p>
						<PieChart />
						<Card />
					</p>
				</p>
			</DataContext.Provider>
		</>
	);
}
