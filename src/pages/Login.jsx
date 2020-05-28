import React from 'react';
import LoginForm from '../components/LoginForm';

const Login = () => {
	return (
		<div>
			<section className='mb-5'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-8 mx-auto'>
							<h1>Authentification</h1>
							<LoginForm />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Login;
