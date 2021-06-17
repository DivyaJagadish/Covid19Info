import React, { useContext } from "react";
import { PieChart } from "react-minimal-pie-chart";
import DataContext from "./dataContext";
import "../piechart.css";
import Textdata from "./Text";
import SingleCard from "./singlecard";
export default function Piechart() {
	const { state } = useContext(DataContext);
	console.log(state);

	return (
		<p>
			<SingleCard
				title={"Country"}
				value={state.CountryName}
				color={"#91E0FF"}
			/>
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
				labelStyle={{ fontSize: "10px", fontWeight: "bold" }}
			/>
		</p>
	);
}
