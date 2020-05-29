import { FETCH_POSTNEW_REQUEST, FETCH_POSTNEW_SUCCESS, FETCH_POSTNEW_FAILURE } from './postNewType';

const initialState = {
	loading: false,
	postNew: [],
	error: null
};

const postNewReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_POSTNEW_REQUEST:
		return {
			...state,
			loading: true
		};
		case FETCH_POSTNEW_SUCCESS:
		return {
			...state,
			loading: false,
			postNew: action.postNew
		};
		case FETCH_POSTNEW_FAILURE:
		return {
			...state,
			loading: false,
			error: action.error
		};
		default: return state;
	};
};

export default postNewReducer;
