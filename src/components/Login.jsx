import React from 'react';

const Login = () => {
	return(
		<h2>Login</h2>


		<form>
			<div className='form-group'>
				<label className='sr-only' for='inlineFormInputGroup'>Username</label>
				<div className='input-group mb-2'>
					<div className='input-group-prepend'>
						<div className='input-group-text'>@</div>
					</div>
					<input type='text' className='form-control' id='inlineFormInputGroup' placeholder='Username' />
				</div>
			</div>
			<div className='form-group'>
				<input type='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Email address' />
				<small id='emailHelp' className='form-text text-muted'>We'll never share your email with anyone else.</small>
			</div>
			<div className='form-group'>
				<input type='password' className='form-control' id='exampleInputPassword1' placeholder='Password' />
			</div>
			<div className='form-group form-check'>
				<input type='checkbox' className='form-check-input' id='exampleCheck1' />
				<label className='form-check-label' for='exampleCheck1'>Check me out</label>
			</div>
			<button type='submit' className='btn btn-primary'>Submit</button>
		</form>





	);
};

export default Login;
