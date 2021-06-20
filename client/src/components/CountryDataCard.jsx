import React,{useContext} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import DataContext from "./dataContext"
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme)=>({
	root: {
		minWidth: 275,
			[theme.breakpoints.down("md")]: {
			maxWidth: "100%",
			margin: 5,

		},
	},
  media: {
    height:200,
    objectFit:"cover",
		[theme.breakpoints.down("md")]: {
		height :200,
    objectFit:"cover",
		},
  },
	
}));

export default function OutlinedCard() {
	const classes = useStyles();
  const {state}= useContext(DataContext);

	return (
		<Card
			className={classes.root}
		>
			<CardContent>
				<Typography variant="h8" component="h2">
					Covid -19 Statistics {state.CountryName}

				</Typography>
        <CardMedia
          className={classes.media}
          image={state.CountryFlag}
          title="Flag"
        />
        	<Typography variant="h6" component="h2">
          Continent : {state.continent}<br/>
          Population :{state.Population}<br/>
          </Typography>
			</CardContent>
		</Card>
	);
}
