import React, { useContext } from "react";
import { PieChart } from "react-minimal-pie-chart";
import DataContext from "./dataContext";
import "../piechart.css";
export default function Piechart() {
	const { state } = useContext(DataContext);
	console.log(state);

	return (
		<p>
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
