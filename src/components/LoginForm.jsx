import React from 'react';
import * as API from '../services/api';
import { useDispatch } from 'react-redux';

const Login = () => {
	const dispatch = useDispatch();

	const submit = (event) => {
		event.preventDefault();
		const identifier = document.getElementById('identifier').value;
		const password = document.getElementById('password').value;
		dispatch(API.login(identifier, password));
	};

	return(
		<div>
			<h2>Login</h2>
			<form onSubmit={submit}>
				<div className='form-group'>
					<input type='text' className='form-control' id='identifier' aria-describedby='identifierHelp' placeholder='Identifier' />
					<small id='identifierHelp' className='form-text text-muted'>Username or Email</small>
				</div>
				<div className='form-group'>
					<input type='password' className='form-control' id='password' placeholder='Password' />
				</div>
				<button type='submit' className='btn btn-primary'>Submit</button>
			</form>
		</div>
	);
};

export default Login;
