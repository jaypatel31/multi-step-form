import React, {useContext} from 'react'
import {GlobalContext} from "./GlobalContext"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import AppBar from "material-ui/AppBar"
import {List, ListItem} from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton"
import gif from "./tenor.gif"

function Success() {
	const {fields } = useContext(GlobalContext);


	return (
		<MuiThemeProvider>
			<>
				<AppBar  title="Success"/>
				{
					((fields.pName).toLowerCase().indexOf("patel")>-1)?<div> <h1>Small Gift From Patel to {fields.firstName}</h1><img src={gif} alt="gif" style={{marginTop:"12px",width:"400px"}}/></div>: <div><h2>Your Party Request Has been sent to {fields.pName}..</h2>Also one Ending Quote<h3>"Mandir Khula Nahi aur {fields.firstName + " " + fields.lastName} Pehle Chale Aye"</h3></div>
				}
				<h1 style={{fontFamily:"sofia"}}>Please Send these as ScreenShot in PiedPiper Group :)</h1>
				
			</>
		</MuiThemeProvider>
	)
}

export default Success