import React from 'react';
import SignIn from '../components/SignIn';
import Login from '../components/Login';

const Auth = () => {
	return (
		<div className='container'>
			<h1>Auth</h1>
			<SignIn />
			<Login />
		</div>
	);
};

export default Auth;
