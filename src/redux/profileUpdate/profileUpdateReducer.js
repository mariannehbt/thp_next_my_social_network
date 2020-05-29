import { FETCH_PROFILEUPDATE_REQUEST, FETCH_PROFILEUPDATE_SUCCESS, FETCH_PROFILEUPDATE_FAILURE } from './profileUpdateType';

const initialState = {
	loading: false,
	profileUpdate: [],
	error: null
};

const profileUpdateReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PROFILEUPDATE_REQUEST:
		return {
			...state,
			loading: true
		};
		case FETCH_PROFILEUPDATE_SUCCESS:
		return {
			...state,
			loading: false,
			profileUpdate: action.profileUpdate
		};
		case FETCH_PROFILEUPDATE_FAILURE:
		return {
			...state,
			loading: false,
			error: action.error
		};
		default: return state;
	};
};

export default profileUpdateReducer;
