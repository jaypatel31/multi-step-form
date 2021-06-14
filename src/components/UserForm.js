import React, {useContext} from 'react'
import {GlobalContext} from "./GlobalContext"
import FormUserDetails from "./FormUserDetails"
import FormPersonalDetails from "./FormPersonalDetails"
import Confirm from "./Confirm"
import Success from "./Success"

function UserForm() {
	const {fields} = useContext(GlobalContext);
	const {steps} = fields;

	switch(steps){
		case 1:
			return (
				<FormUserDetails/>
			)
		case 2:
			return (
				<FormPersonalDetails/>
			)
		case 3:
			return (
				<Confirm/>
			)
		case 4: 
			return (
				<Success/>
			)
	}
}

export default UserForm