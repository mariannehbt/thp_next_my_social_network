import React from 'react';
import ReactDOM from 'react-dom';
// React Redux
import { Provider } from 'react-redux';
import store from './redux/store';
// App
import App from './App';
// Bootstrap & CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.css'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
