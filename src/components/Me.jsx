import React from 'react';
import * as API from '../services/api';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

const Profile = () => {
	const profile = useSelector(state => state.profile.profile);

	const dispatch = useDispatch();

	const submit = (event) => {
		event.preventDefault();
		const user = profile.id;
		const username = document.getElementById('username').value;
		const description = document.getElementById('description').value;
		dispatch(API.profileUpdate(user, username, description));
	};

	return (
		<div>
			<form onSubmit={submit}>
				<div className='form-row'>
					<div className='col-md-4 mb-3'>
						<label>Username</label>
						<div className='input-group'>
							<div className='input-group-prepend'>
								<span className='input-group-text'>@</span>
							</div>
							<input type='text' className='form-control' id='username' placeholder={(profile.username != null) ? profile.username : ''} />
						</div>
					</div>
					<div className='col-md-8 mb-3'>
						<label>Email</label>
						<p className='form-control'>{(profile.email != null) ? profile.email : 'Email'}</p>
					</div>
				</div>
				<div className='form-row'>
					<div className='col-md-12 mb-3'>
						<label>Description</label>
						<textarea type='text' className='form-control' id='description' placeholder={(profile.description != null) ? profile.description : ''} />
					</div>
				</div>
				<div className='form-row'>
					<div className='col-md-6 mb-3'>
						<label>Last profile update :</label>
						<p className='form-control'>{moment(profile.updated_at).calendar()}</p>
					</div>
					<div className='col-md-6 mb-3'>
						<label>Member since :</label>
						<p className='form-control'>{moment(profile.created_at).calendar()}</p>
					</div>
				</div>
				<button className='btn btn-info' type='submit'>Confirm changes</button>
			</form>
		</div>
	);
};

export default Profile;
