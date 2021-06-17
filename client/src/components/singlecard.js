import React from "react";
import { makeStyles, rgbToHex } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import { blue, blueGrey } from "@material-ui/core/colors";

const useStyles = makeStyles({
	root: {
		minWidth: 275,
		marginLeft: 12,
		marginRight: 12,
		marginBottom: 12,
	},

	pos: {
		marginBottom: 12,
	},
});

export default function OutlinedCard(props) {
	const classes = useStyles();

	return (
		<Card
			className={classes.root}
			variant="outlined"
			style={{ backgroundColor: props.color }}
		>
			<CardContent>
				<Typography variant="h5" component="h2">
					{props.title} : {props.value}
					{/* </Typography>
				<Typography className={classes.pos} color="textSecondary"> */}
				</Typography>
			</CardContent>
		</Card>
	);
}
