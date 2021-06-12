import React from "react";
import { AppBar, Toolbar, Typography} from "@material-ui/core";
export default function Nav() {

	return (
		<AppBar position="fixed" className="nav-bar">
			<Toolbar 
				style={{backgroundColor: "#416ec2"}}
				className="nav-bar--container">
      <Typography variant="h6" >
    Covid -19 Map
    </Typography>
    	</Toolbar>
		</AppBar>
	);
}