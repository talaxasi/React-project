let initialState = {
	items: null,
	isReady: false,
	filter: null
}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'SET_BOOKS':
			return {
				...state,
				items: action.payload
			}
		case 'READY':
			return {
				...state,
				isReady: action.payload
			}
			case 'SET_FILTER':
			return {
				...state,
				filter: action.payload
			}
		default:
			return state
	}
}