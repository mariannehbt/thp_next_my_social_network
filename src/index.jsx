import React from 'react';
// React Router
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Components
import Navbar from './components/Navbar';
// Pages
import Auth from './pages/Auth';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Users from './pages/Users';

const App = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path='/auth'>
					<Auth />
				</Route>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/posts'>
					<Posts />
				</Route>
				<Route path='/users'>
					<Users />
				</Route>
			</Switch>
		</Router>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
