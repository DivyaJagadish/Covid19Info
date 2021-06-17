import React,{useContext} from "react";
import { makeStyles, rgbToHex } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import DataContext from "./dataContext"
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import { blue, blueGrey } from "@material-ui/core/colors";

const useStyles = makeStyles({
	root: {
		minWidth: 275,
	
	},
  media: {
    height:200,
    
    objectFit:"cover"
  },
	pos: {
		marginBottom: 12,
	},
});

export default function OutlinedCard() {
	const classes = useStyles();
    const {state}= useContext(DataContext);
  console.log(state);

	return (
		<Card
			className={classes.root}
			// variant="outlined"
			// style={{ backgroundColor:"#91E0FF" }}
		>
			<CardContent>
				<Typography variant="h5" component="h2">
					Covid -19 Statistics {state.CountryName}

				</Typography>
        <CardMedia
          className={classes.media}
          image={state.CountryFlag}
          title="Flag"
        />
        	<Typography variant="h6" component="h2">
          Continent:{state.continent}<br/>
          Population :{state.Population}<br/>
          </Typography>
       
		
			</CardContent>
		</Card>
	);
}
