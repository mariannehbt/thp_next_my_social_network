import React from 'react';
import { Link } from 'react-router-dom';

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
					<li className='nav-item'>
						<Link className='nav-link' to='/posts'>Posts</Link>
					</li>
					<li className='nav-item dropdown'>
						<Link className='nav-link dropdown-toggle' to='/auth' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Auth</Link>
						<div className='dropdown-menu' aria-labelledby='navbarDropdown'>
							<Link className='nav-link' to='/users'>Users</Link>
							<div className='dropdown-divider'></div>
							<Link className='nav-link' to='/auth'>Auth</Link>
						</div>
					</li>
				</ul>
				<div className='btn-group' role='group'>
					<button id='btnGroupDrop1' type='button' className='btn btn-secondary dropdown-toggle px-5' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
						Connexion
					</button>
					<div className='dropdown-menu w-100'>
						<Link className='dropdown-item' to='/auth/local/register'>Sign In</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
