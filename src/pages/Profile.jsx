import React from 'react';
import { useDispatch } from 'react-redux';
import * as API from '../services/api';
import Me from '../components/Me';

const Profile = () => {
	const dispatch = useDispatch();
	dispatch(API.fetchProfile());
	
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
