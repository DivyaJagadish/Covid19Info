import React from "react";
import SimpleMap from "./map";
import Nav from "./Navigation.jsx";
import Card from "./StatComponents";
import { PieChart } from "react-minimal-pie-chart";
import useApplicationData from "./helpers/useApplicationData";
import DataContext from "./dataContext";

export default function App() {
	const { state, getdataforCountry } = useApplicationData();
	const data = {
		state,
		getdataforCountry,
	};
	return (
		<>
			<Nav />
			<DataContext.Provider value={data}>
				<SimpleMap />
				<Card />
				<PieChart
					data={[
						{
							title: "Recovered",
							value: state.RecoveredCases,
							color: "	#00FF00",
						},
						{ title: "Deaths", value: state.Totaldeath, color: "#C13C37" },
						{ title: "Active", value: state.ActiveCases, color: "#6A2135" },
					]}
					label={({ dataEntry }) => dataEntry.title}
				/>
			</DataContext.Provider>
		</>
	);
}
