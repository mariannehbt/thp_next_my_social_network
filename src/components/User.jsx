import React from 'react';
import * as API from '../services/api';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

const User = () => {
	const user = useSelector(state => state.users.users);

	return (
		<div>
			<div className='form-row'>
				<div className='col-md-4 mb-3'>
					<label>Username</label>
					<div className='input-group'>
						<div className='input-group-prepend'>
							<span className='input-group-text'>@</span>
						</div>
						<p className='form-control'>{(user.username != null) ? user.username : ''}</p>
					</div>
				</div>
				<div className='col-md-8 mb-3'>
					<label>Email</label>
					<p className='form-control'>{(user.email != null) ? user.email : 'Email'}</p>
				</div>
			</div>
			<div className='form-row'>
				<div className='col-md-12 mb-3'>
					<label>Description</label>
					<p className='form-control'>{(user.description != null) ? user.description : ''}</p>
				</div>
			</div>
			<div className='form-row'>
				<div className='col-md-6 mb-3'>
					<label>Last user update :</label>
					<p className='form-control'>{moment(user.updated_at).calendar()}</p>
				</div>
				<div className='col-md-6 mb-3'>
					<label>Member since :</label>
					<p className='form-control'>{moment(user.created_at).calendar()}</p>
				</div>
			</div>
		</div>
	);
};

export default User;
