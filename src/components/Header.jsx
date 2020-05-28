import React from 'react';
import * as API from '../services/api';
import { useDispatch } from 'react-redux';

const Header = () => {
	const dispatch = useDispatch();
	return (
		<header>
			<div className='overlay'></div>
				<video playsInline='playsinline' autoPlay='autoplay' muted='muted' loop='loop'>
					<source src='https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4' type='video/mp4' />
				</video>
				<div className='container h-100'>
					<div className='d-flex h-100 text-center align-items-center'>
						<div className='w-100 text-white'>
							<h1 className='display-3'>My Social Network</h1>
							<p className='lead mb-0'>Welcome on My Social Network</p>
							<button className='btn btn-outline-info mt-3 mr-3' onClick={() => dispatch(API.fetchPosts())}>See posts</button>
						</div>
					</div>
				</div>
		</header>
	);
};

export default Header;
