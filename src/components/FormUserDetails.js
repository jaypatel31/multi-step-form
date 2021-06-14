import React, {useContext} from 'react'
import {GlobalContext} from "./GlobalContext"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import AppBar from "material-ui/AppBar"
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton"

function FormUserDetails() {
	const {fields , nextStep, prevStep, HandleChange} = useContext(GlobalContext);

	const formContinue = e =>{
		e.preventDefault();
		nextStep()
	}

	return (
		<MuiThemeProvider>
			<>
				<AppBar title="Personal Details"/>
				<TextField 
					hintText="Enter Your First Name"
					floatingLabelText="First Name"
					onChange={(e)=>HandleChange("firstName",e.target.value)}
					defaultValue={fields.firstName}
				/>
				<br/>
				<TextField 
					hintText="Enter Your Last Name"
					floatingLabelText="Last Name"
					onChange={(e)=>HandleChange("lastName",e.target.value)}
					defaultValue={fields.lastName}
				/>
				<br/>
				<TextField 
					hintText="Enter Your Email "
					floatingLabelText="Email"
					onChange={(e)=>HandleChange("email",e.target.value)}
					defaultValue={fields.email}
				/>
				<br/>
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

export default FormUserDetails