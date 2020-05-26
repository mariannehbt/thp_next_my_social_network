import { FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from './postsType';

export const fetchPostsRequest = () => {
	return {
		type: FETCH_POSTS_REQUEST
	};
};

export const fetchPostsSuccess = (posts) => {
	return {
		type: FETCH_POSTS_SUCCESS,
		posts
	};
};

export const fetchPostsFailure = (error) => {
	return {
		type: FETCH_POSTS_FAILURE,
		error
	};
};

export const fetchPosts = () => {
	return (dispatch) => {
		dispatch(fetchPostsRequest());
		fetch('https://api-minireseausocial.mathis-dyk.fr/posts')
		.then((response) => response.json())
		.then((response) => {
			if (response.status === 'error') {
				dispatch(fetchPostsFailure(response.message));
			} else {
				dispatch(fetchPostsSuccess(response[0].text));
			};
		});
	};
};
