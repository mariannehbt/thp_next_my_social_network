import React from 'react';
import Me from '../components/Me';

const Profile = () => {
	return (
		<div>
			<section className='mb-5'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-8 mx-auto'>
							<h1>Profile</h1>
							<Me />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Profile;
