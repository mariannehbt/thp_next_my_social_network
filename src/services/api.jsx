import Cookies from 'js-cookie';
import { fetchRegisterRequest, fetchRegisterSuccess, fetchRegisterFailure } from '../redux/register/registerActions';
import { fetchLoginRequest, fetchLoginSuccess, fetchLoginFailure, fetchLogoutSuccess } from '../redux/log/logActions';
import { fetchPostsRequest, fetchPostsSuccess, fetchPostsFailure } from '../redux/posts/postsActions';


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

export const login = (identifier, password) => {
	const data = {
		identifier: identifier,
		password: password
	};

	return (dispatch) => {
		dispatch(fetchLoginRequest());
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
				dispatch(fetchLoginFailure(response.message[0].messages[0].message));
				alert(response.message[0].messages[0].message);
			} else {
				console.log(response.jwt);
				Cookies.set('token', response.jwt);
				console.log(Cookies.get('token'));
				dispatch(fetchLoginSuccess(Cookies.get('token')));
			}
		})
		.catch((error) => console.error('error:', error));
	};
};

export const logout = () => {
	return (dispatch) => {
		dispatch(fetchLogoutSuccess());
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
