import { FETCH_POSTDELETE_REQUEST, FETCH_POSTDELETE_SUCCESS, FETCH_POSTDELETE_FAILURE } from './postDeleteType';

export const fetchPostDeleteRequest = () => {
	return {
		type: FETCH_POSTDELETE_REQUEST
	};
};

export const fetchPostDeleteSuccess = (postDelete) => {
	return {
		type: FETCH_POSTDELETE_SUCCESS,
		postDelete
	};
};

export const fetchPostDeleteFailure = (error) => {
	return {
		type: FETCH_POSTDELETE_FAILURE,
		error
	};
};
