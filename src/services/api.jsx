import Cookies from 'js-cookie';
import { fetchRegisterRequest, fetchRegisterSuccess, fetchRegisterFailure, fetchUnregisterSuccess } from '../redux/register/registerActions';
import { fetchLoginRequest, fetchLoginSuccess, fetchLoginFailure, fetchLogoutSuccess } from '../redux/log/logActions';
import { fetchProfileRequest, fetchProfileSuccess, fetchProfileFailure } from '../redux/profile/profileActions';
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
				Cookies.set('token', response.jwt);
				dispatch(fetchRegisterSuccess(Cookies.get('token')));
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
				Cookies.set('token', response.jwt);
				dispatch(fetchLoginSuccess(Cookies.get('token')));
			}
		})
		.catch((error) => console.error('error:', error));
	};
};

export const logout = () => {
	return (dispatch) => {
		dispatch(fetchLogoutSuccess());
		dispatch(fetchUnregisterSuccess());
	};
};

export const fetchProfile = () => {
	return (dispatch) => {
		dispatch(fetchProfileRequest());
		fetch('https://api-minireseausocial.mathis-dyk.fr/users/me', {
			method: 'get',
			headers: {
				'Authorization': `Bearer ${Cookies.get('token')}`,
				'Content-Type': 'application/json'
			}
		})
		.then((response) => response.json())
		.then((response) => {
			if (response.error != null) {
				dispatch(fetchProfileFailure(response.message[0].messages[0].id));
				alert(response.message[0].messages[0].id);
			} else {
				dispatch(fetchProfileSuccess(response));
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
