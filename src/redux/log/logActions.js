import { FETCH_LOGIN_REQUEST, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_FAILURE, FETCH_LOGOUT_SUCCESS } from './logType';

export const fetchLoginRequest = () => {
	return {
		type: FETCH_LOGIN_REQUEST
	};
};

export const fetchLoginSuccess = (login) => {
	return {
		type: FETCH_LOGIN_SUCCESS,
		login
	};
};

export const fetchLoginFailure = (error) => {
	return {
		type: FETCH_LOGIN_FAILURE,
		error
	};
};

export const fetchLogoutSuccess = () => {
	return {
		type: FETCH_LOGOUT_SUCCESS
	};
};
