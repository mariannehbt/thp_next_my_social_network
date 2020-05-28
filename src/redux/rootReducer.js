import { combineReducers } from 'redux';
import logReducer from './log/logReducer.js'
import postsReducer from './posts/postsReducer.js';
import registerReducer from './register/registerReducer.js';

const rootReducer = combineReducers({
	log: logReducer,
	posts: postsReducer,
	register: registerReducer
})

export default rootReducer;
