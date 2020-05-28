import Cookies from 'js-cookie';
import { fetchPostsRequest, fetchPostsSuccess, fetchPostsFailure } from '../redux/posts/postsActions';
import { fetchRegisterRequest, fetchRegisterSuccess, fetchRegisterFailure } from '../redux/register/registerActions';


export const register = (username, email, password) => {
	const data = {
		username: username,
		email: email,
		password: password
	};

	return (dispatch) => {
		dispatch(fetchRegisterRequest());
		fetch('https://api-minireseausocial.mathis-dyk.fr/auth/local/register', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
		.then((response) => response.json())
		.then((response) => {
			if (response.error != null) {
				dispatch(fetchRegisterFailure(response.message[0].messages[0].message));
				alert(response.message[0].messages[0].message);
			} else {
				dispatch(fetchRegisterSuccess(response.jwt));
				Cookies.set('token', response.jwt);
			}
		})
		.catch((error) => console.error('error:', error));
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
				dispatch(fetchPostsSuccess(response));
			};
		});
	};
};



export const login = (identifier, password) => {
	const data = {
		identifier: identifier,
		password: password
	};

	fetch('https://api-minireseausocial.mathis-dyk.fr/auth/local', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	.then((response) => response.json())
	.then((response) => {
		if (response.error != null) {
			alert(response.message[0].messages[0].message);
		} else {
			Cookies.set('token', response.jwt);
			console.log(response);
		}
	})
	.catch((error) => console.error('error:', error));
	console.log(data);
};
