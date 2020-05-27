import React from 'react';
import * as API from '../services/api';

const SignIn = () => {
	const submit = (event) => {
		event.preventDefault();
		const username = document.getElementById('username').value;
		const email = document.getElementById('email').value;
		const password = document.getElementById('password').value;
		API.register(username, email, password);
	};

	return(
		<div>
			<h2>Sign In</h2>
			<form onSubmit={submit}>
				<div className='form-group'>
					<label className='sr-only' >Username</label>
					<div className='input-group mb-2'>
						<div className='input-group-prepend'>
							<div className='input-group-text'>@</div>
						</div>
						<input type='text' className='form-control' id='username' placeholder='Username' />
					</div>
				</div>
				<div className='form-group'>
					<input type='email' className='form-control' id='email' aria-describedby='emailHelp' placeholder='Email address' />
					<small id='emailHelp' className='form-text text-muted'>We'll never share your email with anyone else.</small>
				</div>
				<div className='form-group'>
					<input type='password' className='form-control' id='password' placeholder='Password' />
				</div>
				<button type='submit' className='btn btn-primary'>Submit</button>
			</form>
		</div>
	);
};

export default SignIn;
