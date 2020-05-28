import Cookies from 'js-cookie';
import { FETCH_LOGIN_REQUEST, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_FAILURE, FETCH_LOGOUT_SUCCESS } from './logType';

const initialState = {
	loading: false,
	login: Cookies.get('token'),
	error: null
};

const logReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_LOGIN_REQUEST:
		return {
			...state,
			loading: true
		};
		case FETCH_LOGIN_SUCCESS:
		return {
			...state,
			loading: false,
			login: action.login,
		};
		case FETCH_LOGIN_FAILURE:
		return {
			...state,
			loading: false,
			error: action.error
		};
		case FETCH_LOGOUT_SUCCESS:
		Cookies.remove('token')
		return {
			...state,
			loading: false,
			login: Cookies.get('token'),
			error: null
		};
		default: return state;
	};
};

export default logReducer;
