import { FETCH_POSTDELETE_REQUEST, FETCH_POSTDELETE_SUCCESS, FETCH_POSTDELETE_FAILURE } from './postDeleteType';

const initialState = {
	loading: false,
	postDelete: [],
	error: null
};

const postDeleteReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_POSTDELETE_REQUEST:
		return {
			...state,
			loading: true
		};
		case FETCH_POSTDELETE_SUCCESS:
		return {
			...state,
			loading: false,
			postDelete: action.postDelete
		};
		case FETCH_POSTDELETE_FAILURE:
		return {
			...state,
			loading: false,
			error: action.error
		};
		default: return state;
	};
};

export default postDeleteReducer;
