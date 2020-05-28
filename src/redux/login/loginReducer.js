import Cookies from 'js-cookie';
import { FETCH_LOGIN_REQUEST, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_FAILURE } from './loginType';

const initialState = {
	loading: false,
	login: Cookies.get('token'),
	error: null
};

const loginReducer = (state = initialState, action) => {
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
		default: return state;
	};
};

export default loginReducer;
