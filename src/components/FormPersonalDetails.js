import React, {useContext} from 'react'
import {GlobalContext} from "./GlobalContext"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import AppBar from "material-ui/AppBar"
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton"

function FormPersonalDetails() {
	const {fields , nextStep, prevStep, HandleChange} = useContext(GlobalContext);

	const formContinue = e =>{
		e.preventDefault();
		nextStep()
	}

	const formBack = e =>{
		e.preventDefault();
		prevStep()
	}

	return (
		<MuiThemeProvider>
			<>
				<AppBar title="Party Person Details"/>
				<TextField 
					hintText="Enter The Party Person Details"
					floatingLabelText="Full Name"
					onChange={(e)=>HandleChange("pName",e.target.value)}
					defaultValue={fields.pName}
				/>
				<br/>
				<TextField 
					hintText="Enter Your city"
					floatingLabelText="City"
					onChange={(e)=>HandleChange("city",e.target.value)}
					defaultValue={fields.city}
				/>
				<br/>
				<TextField 
					hintText="Enter Purpouse of the Party "
					floatingLabelText="Purpouse"
					onChange={(e)=>HandleChange("purpouse",e.target.value)}
					defaultValue={fields.purpouse}
				/>
				<br/>
				<RaisedButton
					label="Back"
					secondary={true}
					style = {styles.button}
					onClick={formBack}
				/>
				<RaisedButton
					label="Continue"
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

export default FormPersonalDetails