import React, {useReducer} from "react";
import {AppReducer} from "./AppReducer"

const fields = {
	steps:1,
	firstName:"",
	lastName:"",
	email:"",
	pName:"",
	city:"",
	purpouse:""
}

export const GlobalContext = React.createContext(fields); 

export const GlobalProvider = ({children}) =>{

	const [state, dispatch] = useReducer(AppReducer, fields)

	//Action 

	const nextStep = () =>{
		dispatch({
			type:"NEXT_STEP"
		})
	}

	const prevStep = () =>{
		dispatch({
			type:"PREV_STEP"
		})
	}

	const HandleChange = (name,val) =>{
		console.log(name,val)
		dispatch({
			type:"HANDLE_CHANGE",
			name,
			val
		})
	}

	return (
		<GlobalContext.Provider value={{fields:state,nextStep,prevStep,HandleChange}}>
			{children}
		</GlobalContext.Provider>
	)

}