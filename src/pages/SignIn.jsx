import React from 'react';
import SignInForm from '../components/SignInForm';

const SignIn = () => {
	return (
		<div>
			<section className='mb-5'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-8 mx-auto'>
							<h1>Authentification</h1>
							<SignInForm />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default SignIn;
