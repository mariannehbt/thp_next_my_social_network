import React from 'react';
import * as API from '../services/api';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const AuthBtn = () => {
	const dispatch = useDispatch();
	const log = useSelector(state => state.log.login);
	const register = useSelector(state => state.register.registration);
	const profile = useSelector(state => state.profile.profile);

	if (log == null && register == null) {
		return (
			<div className='btn-group' role='group'>
				<button id='btnGroupDrop1' type='button' className='btn btn-info dropdown-toggle px-5' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
					Connexion
				</button>
				<div className='dropdown-menu w-100'>
					<Link className='dropdown-item' to='/auth/local/register'>Sign In</Link>
					<Link className='dropdown-item' to='/auth/local'>Login</Link>
				</div>
			</div>
		);
	} else {
		return (
			<div className='btn-group' role='group'>
				<button id='btnGroupDrop1' type='button' className='btn btn-info dropdown-toggle px-5' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
					{(profile.username != null) ? profile.username : 'Welcome !'}
				</button>
				<div className='dropdown-menu w-100'>
					<Link className='dropdown-item' to='/profile'>My Profile</Link>
					<div className='dropdown-divider'></div>
					<button className='dropdown-item' onClick={() => dispatch(API.logout())}>LogOut</button>
				</div>
			</div>
		);
	}
};

export default AuthBtn;
