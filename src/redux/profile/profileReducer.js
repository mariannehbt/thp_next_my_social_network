import { FETCH_PROFILE_REQUEST, FETCH_PROFILE_SUCCESS, FETCH_PROFILE_FAILURE } from './profileType';

const initialState = {
	loading: false,
	profile: [],
	error: null
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PROFILE_REQUEST:
		return {
			...state,
			loading: true
		};
		case FETCH_PROFILE_SUCCESS:
		return {
			...state,
			loading: false,
			profile: action.profile
		};
		case FETCH_PROFILE_FAILURE:
		return {
			...state,
			loading: false,
			error: action.error
		};
		default: return state;
	};
};

export default profileReducer;
