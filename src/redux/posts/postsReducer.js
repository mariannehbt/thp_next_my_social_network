import { FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from './postsType';

const initialState = {
	loading: false,
	posts: [],
	error: ''
};

const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_POSTS_REQUEST:
		return {
			...state,
			loading: true
		};
		case FETCH_POSTS_SUCCESS:
		return {
			...state,
			loading: false,
			posts: action.posts
		};
		case FETCH_POSTS_FAILURE:
		return {
			...state,
			loading: false,
			error: action.error
		};
		default: return state;
	};
};

export default postsReducer;
