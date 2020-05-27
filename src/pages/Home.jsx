import React from 'react';
import { withAuth} from '../AuthContext';
import Header from '../components/Header';
import HomeContent from '../components/HomeContent';
import Posts from '../components/Posts';

const Home = ({ auth }) => {
	const reponse = ((auth.loggedIn === false) ? 'coucou' : 'bye');
	return (
		<div>
			<p>Hey, this is the first name : {reponse}</p>
			<Header />
			<Posts />
			<HomeContent />
		</div>
	);
};

export default withAuth(Home);
