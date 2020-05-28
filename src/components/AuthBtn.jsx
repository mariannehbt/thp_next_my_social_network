import React from 'react';
import * as API from '../services/api';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const AuthBtn = () => {
	const dispatch = useDispatch();
	const log = useSelector(state => state.log.login);

	console.log((log == null) ? 'login est null' : `login non null = ${log}`);

	if (log == null) {
		return (
			<div className='btn-group' role='group'>
				<button id='btnGroupDrop1' type='button' className='btn btn-secondary dropdown-toggle px-5' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
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
				<button id='btnGroupDrop1' type='button' className='btn btn-secondary dropdown-toggle px-5' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
					Mon Profil
				</button>
				<div className='dropdown-menu w-100'>
					<button className='dropdown-item' onClick={() => dispatch(API.logout())}>LogOut</button>
				</div>
			</div>
		);
	}
};

export default AuthBtn;
