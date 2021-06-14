import React, {useContext} from 'react'
import {GlobalContext} from "./GlobalContext"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import AppBar from "material-ui/AppBar"
import {List, ListItem} from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton"

function Confirm() {
	const {fields , nextStep, prevStep} = useContext(GlobalContext);

	const formContinue = e =>{
		e.preventDefault();
		//Backend Stuff can be handled Here
		nextStep()
	}

	const formBack = e =>{
		e.preventDefault();
		prevStep()
	}

	return (
		<MuiThemeProvider>
			<>
				<AppBar  title="Confirm Data"/>
				<List>
					<ListItem
						primaryText="Your First Name"
						secondaryText={fields.firstName}
					/>
					<ListItem
						primaryText="Your Last Name"
						secondaryText={fields.lastName}
					/>
					<ListItem
						primaryText="Your Email"
						secondaryText={fields.email}
					/>
					<ListItem
						primaryText="Party Giver Full Name"
						secondaryText={fields.pName}
					/>
					<ListItem
						primaryText="Your City Name"
						secondaryText={fields.city}
					/>
					<ListItem
						primaryText="Purpouse of the Party"
						secondaryText={fields.purpouse}
					/>
				</List>
				
				<br/>
				<RaisedButton
					label="Back"
					secondary={true}
					style = {styles.button}
					onClick={formBack}
				/>
				<RaisedButton
					label="Take Party"
					primary={true}
					style = {styles.button}
					onClick={formContinue}
				/>
				
			</>
		</MuiThemeProvider>
	)
}

const styles ={
	button:{
		margin:15
	}
}

export default Confirm