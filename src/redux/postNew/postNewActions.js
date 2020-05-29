import { FETCH_POSTNEW_REQUEST, FETCH_POSTNEW_SUCCESS, FETCH_POSTNEW_FAILURE } from './postNewType';

export const fetchPostNewRequest = () => {
	return {
		type: FETCH_POSTNEW_REQUEST
	};
};

export const fetchPostNewSuccess = (postNew) => {
	return {
		type: FETCH_POSTNEW_SUCCESS,
		postNew
	};
};

export const fetchPostNewFailure = (error) => {
	return {
		type: FETCH_POSTNEW_FAILURE,
		error
	};
};
