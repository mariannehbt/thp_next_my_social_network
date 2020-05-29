import React from 'react';
import User from '../components/User';

const UserProfile = () => {
	return (
		<div>
			<section className='mb-5'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-8 mx-auto'>
							<h1>Profile</h1>
							<User />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default UserProfile;
