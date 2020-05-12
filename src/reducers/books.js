let initialState = {}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'SET_BOOKS':
			return {
				...state,
				items: action.payload
			}
		default:
			return state
	}
}