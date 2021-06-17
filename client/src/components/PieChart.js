import React, { useContext } from "react";
import { PieChart } from "react-minimal-pie-chart";
import DataContext from "./dataContext";
import "../piechart.css";
import Textdata from "./Text";
import CountryData from "./CountryDataCard";
import SingleCard from "./singlecard";
export default function Piechart() {
	const { state } = useContext(DataContext);
	console.log(state);

	return (
		<p>
			{/* <SingleCard title={"Covid- 19 Statistics"} value={state.CountryName} /> */}
			<PieChart
				data={[
					{
						title: "Recovered",
						value: state.RecoveredCases,
						color: "	#00FF00",
					},
					{ title: "Deaths", value: state.Totaldeath, color: "#C13C37" },
					{ title: "Active", value: state.ActiveCases, color: "#FFFF00" },
				]}
				label={({ dataEntry }) => dataEntry.title}
				labelStyle={{ fontSize: "5px", fontWeight: "bold" }}
			/>
		</p>
	);
}
