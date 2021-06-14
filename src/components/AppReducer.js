export const AppReducer = (state,action) => {
	switch(action.type){
		case "NEXT_STEP":
			return {
				...state,
				steps:(state.steps+1)
			}
		case "PREV_STEP":
			return {
				...state,
				steps:(state.steps-1)
			}
		case "HANDLE_CHANGE":
			return{
				...state,
				[action.name]:action.val
			}
		default:
			return state;
	}
}