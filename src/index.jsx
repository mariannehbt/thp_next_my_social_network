import React from 'react';
// React Router
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// React Redux
import { Provider } from 'react-redux';
import store from './redux/store';
// Components
import Navbar from './components/Navbar';
// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import SignIn from './pages/SignIn';
// Bootstrap & CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.css'

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/auth/local'>
						<Login />
					</Route>
					<Route exact path='/auth/local/register'>
						<SignIn />
					</Route>
				</Switch>
			</Router>
		</Provider>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
