import { FETCH_REGISTER_REQUEST, FETCH_REGISTER_SUCCESS, FETCH_REGISTER_FAILURE } from './registerType';

const initialState = {
	loading: false,
	registration: null,
	error: null
};

const registrationReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_REGISTER_REQUEST:
		return {
			...state,
			loading: true
		};
		case FETCH_REGISTER_SUCCESS:
		return {
			...state,
			loading: false,
			registration: action.registration,
		};
		case FETCH_REGISTER_FAILURE:
		return {
			...state,
			loading: false,
			error: action.error
		};
		default: return state;
	};
};

export default registrationReducer;
