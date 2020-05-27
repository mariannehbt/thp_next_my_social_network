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
import Auth from './pages/Auth';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Users from './pages/Users';
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
					<Route exact path='/auth'>
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
		</Provider>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
