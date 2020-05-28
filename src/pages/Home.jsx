import React from 'react';
import Header from '../components/Header';
import PostInput from '../components/PostInput';
import Posts from '../components/Posts';
import HomeContent from '../components/HomeContent';

const Home = () => {
	return (
		<div>
			<Header />
			<section className='mb-5'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-8 mx-auto'>
							<PostInput />
							<Posts />
							<HomeContent />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
