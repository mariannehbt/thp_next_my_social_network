import { FETCH_PROFILE_REQUEST, FETCH_PROFILE_SUCCESS, FETCH_PROFILE_FAILURE } from './profileType';

export const fetchProfileRequest = () => {
	return {
		type: FETCH_PROFILE_REQUEST
	};
};

export const fetchProfileSuccess = (profile) => {
	return {
		type: FETCH_PROFILE_SUCCESS,
		profile
	};
};

export const fetchProfileFailure = (error) => {
	return {
		type: FETCH_PROFILE_FAILURE,
		error
	};
};
