import React from 'react';
import { Link } from 'react-router-dom';
import AuthBtn from './AuthBtn';

const Navbar = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
			<Link className='navbar-brand' to='/'>My Social Network</Link>
			<button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
				<span className='navbar-toggler-icon'></span>
			</button>
			<div className='collapse navbar-collapse' id='navbarSupportedContent'>
				<ul className='navbar-nav mr-auto'>
					<li className='nav-item active'>
						<Link className='nav-link' to='/'>Home</Link>
					</li>
					<li className='nav-item dropdown'>
						<Link className='nav-link dropdown-toggle' to='/auth' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Auth</Link>
						<div className='dropdown-menu' aria-labelledby='navbarDropdown'>
							<Link className='nav-link' to='/auth/local/register'>SignIn</Link>
							<div className='dropdown-divider'></div>
							<Link className='nav-link' to='/auth/local'>Login</Link>
						</div>
					</li>
				</ul>
				<AuthBtn />
			</div>
		</nav>
	);
};

export default Navbar;
