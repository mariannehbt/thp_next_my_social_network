import { FETCH_REGISTER_REQUEST, FETCH_REGISTER_SUCCESS, FETCH_REGISTER_FAILURE } from './registerType';

export const fetchRegisterRequest = () => {
	return {
		type: FETCH_REGISTER_REQUEST
	};
};

export const fetchRegisterSuccess = (registration) => {
	return {
		type: FETCH_REGISTER_SUCCESS,
		registration
	};
};

export const fetchRegisterFailure = (error) => {
	return {
		type: FETCH_REGISTER_FAILURE,
		error
	};
};
