import React from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const AuthBtn = () => {
	if ((Cookies.get('token')) == null) {
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
					<Link className='dropdown-item' to='/auth/local/register'>Username</Link>
					<button className='dropdown-item' onClick={Cookies.remove('token')}>Coucou</button>
					<Link className='dropdown-item' to='/auth/local'>Login</Link>
				</div>
			</div>
		);
	}
};

export default AuthBtn;
