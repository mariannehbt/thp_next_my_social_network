import { FETCH_PROFILEUPDATE_REQUEST, FETCH_PROFILEUPDATE_SUCCESS, FETCH_PROFILEUPDATE_FAILURE } from './profileUpdateType';

export const fetchProfileUpdateRequest = () => {
	return {
		type: FETCH_PROFILEUPDATE_REQUEST
	};
};

export const fetchProfileUpdateSuccess = (profileUpdate) => {
	return {
		type: FETCH_PROFILEUPDATE_SUCCESS,
		profileUpdate
	};
};

export const fetchProfileUpdateFailure = (error) => {
	return {
		type: FETCH_PROFILEUPDATE_FAILURE,
		error
	};
};
