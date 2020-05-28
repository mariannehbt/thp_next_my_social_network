import Cookies from 'js-cookie';
import { FETCH_REGISTER_REQUEST, FETCH_REGISTER_SUCCESS, FETCH_REGISTER_FAILURE, FETCH_UNREGISTER_SUCCESS } from './registerType';

const initialState = {
	loading: false,
	registration: Cookies.get('token'),
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
		case FETCH_UNREGISTER_SUCCESS:
		Cookies.remove('token')
		return {
			...state,
			loading: false,
			registration: Cookies.get('token'),
			error: null
		};
		default: return state;
	};
};

export default registrationReducer;
