import React from 'react';
import { useDispatch } from 'react-redux';
import * as API from '../services/api';
import Me from '../components/Me';

const Profile = () => {
	const dispatch = useDispatch();
	dispatch(API.fetchProfile());
	
	return (
		<div className='container'>
			<h1>Profile</h1>
			<Me />
		</div>
	);
};

export default Profile;
