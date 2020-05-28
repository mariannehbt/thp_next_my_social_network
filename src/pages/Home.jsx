import React from 'react';
import Header from '../components/Header';
import Posts from '../components/Posts';
import HomeContent from '../components/HomeContent';

const Home = () => {
	return (
		<div>
			<Header />
			<Posts />
			<HomeContent />
		</div>
	);
};

export default Home;
