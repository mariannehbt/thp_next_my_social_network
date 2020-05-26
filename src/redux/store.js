import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import postsReducer from './posts/postsReducer.js';

const store = createStore(
	postsReducer,
	compose(
		applyMiddleware(thunkMiddleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;
