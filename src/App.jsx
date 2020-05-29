import React from 'react';
// React Redux
import { useSelector, useDispatch} from 'react-redux';
// React Router
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// API
import * as API from './services/api';
// Components
import Navbar from './components/Navbar';
// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';

const App = () => {
	const log = useSelector(state => state.log.login);
	const register = useSelector(state => state.register.registration);

	const dispatch = useDispatch();

	const checkAuth = () => {
		return (
			(log == null && register == null) ? false : true
		);
	};

	const getUser = () => {
		return (
			(checkAuth() === true) ? dispatch(API.fetchProfile()) : null
		);
	};

	getUser();

	const AuthRoute = ({ component: Component, ...rest }) => (
		<Route {...rest} render={props => (
			checkAuth() ? (
				<Component {...props} />
				) : (
				<Redirect to={{ pathname: '/auth/local' }} />
			)
		)} />
	);

	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/auth/local'>
					{checkAuth() ? <Redirect to='/profile' /> : <Login />}
				</Route>
				<AuthRoute exact path='/profile' component={Profile} />
				<Route exact path='/auth/local/register'>
					{checkAuth() ? <Redirect to='/profile' /> : <SignIn />}
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
