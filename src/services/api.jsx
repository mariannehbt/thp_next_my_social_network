import Cookies from 'js-cookie';
import { fetchRegisterRequest, fetchRegisterSuccess, fetchRegisterFailure, fetchUnregisterSuccess } from '../redux/register/registerActions';
import { fetchLoginRequest, fetchLoginSuccess, fetchLoginFailure, fetchLogoutSuccess } from '../redux/log/logActions';
import { fetchProfileRequest, fetchProfileSuccess, fetchProfileFailure } from '../redux/profile/profileActions';
import { fetchProfileUpdateRequest, fetchProfileUpdateSuccess, fetchProfileUpdateFailure } from '../redux/profileUpdate/profileUpdateActions';
import { fetchPostDeleteRequest, fetchPostDeleteSuccess, fetchPostDeleteFailure } from '../redux/postDelete/postDeleteActions';
import { fetchPostNewRequest, fetchPostNewSuccess, fetchPostNewFailure } from '../redux/postNew/postNewActions';
import { fetchPostsRequest, fetchPostsSuccess, fetchPostsFailure } from '../redux/posts/postsActions';
import { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure } from '../redux/users/usersActions';

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

export const profileUpdate = (user, username, description) => {
	const data = {
		user: user,
		username: username,
		description: description
	};

	return (dispatch) => {
		dispatch(fetchProfileUpdateRequest());
		fetch(`https://api-minireseausocial.mathis-dyk.fr/users/${user}`, {
			method: 'put',
			headers: {
				'Authorization': `Bearer ${Cookies.get('token')}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
		.then((response) => response.json())
		.then((response) => {
			if (response.error != null) {
				dispatch(fetchProfileUpdateFailure(response.message));
				alert(response.message);
			} else {
				console.log(response)
				dispatch(fetchProfileUpdateSuccess(response));
			}
		})
		.catch((error) => console.error('error:', error));
	};
};

export const postNew = (text, user) => {
	const data = {
		text: text,
		user: user
	};

	return (dispatch) => {
		dispatch(fetchPostNewRequest());
		fetch('https://api-minireseausocial.mathis-dyk.fr/posts', {
			method: 'post',
			headers: {
				'Authorization': `Bearer ${Cookies.get('token')}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
		.then((response) => response.json())
		.then((response) => {
			if (response.error != null) {
				dispatch(fetchPostNewFailure(response.message));
				alert(response.message);
			} else {
				dispatch(fetchPostNewSuccess(response));
				dispatch(fetchPosts());
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

export const postDelete = (post) => {
	const data = {
		post: post
	};
	return (dispatch) => {
		dispatch(fetchPostDeleteRequest());
		fetch(`https://api-minireseausocial.mathis-dyk.fr/posts/${post}`, {
			method: 'delete',
			headers: {
				'Authorization': `Bearer ${Cookies.get('token')}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
		.then((response) => response.json())
		.then((response) => {
			if (response.error != null) {
				dispatch(fetchPostDeleteFailure(response.message));
			} else {
				dispatch(fetchPostDeleteSuccess(response));
				dispatch(fetchPosts());
			};
		});
	};
};

export const fetchUsers = (user) => {

	return (dispatch) => {
		dispatch(fetchUsersRequest());
		fetch(`https://api-minireseausocial.mathis-dyk.fr/users/${user}`, {
			method: 'get',
			headers: {
				'Authorization': `Bearer ${Cookies.get('token')}`,
				'Content-Type': 'application/json'
			}
		})
		.then((response) => response.json())
		.then((response) => {
			if (response.error != null) {
				dispatch(fetchUsersFailure(response.message));
				alert(response.message);
			} else {
				dispatch(fetchUsersSuccess(response));
			};
		});
	};
};
