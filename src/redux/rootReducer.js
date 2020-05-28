import { combineReducers } from 'redux';
import postsReducer from './posts/postsReducer.js';
import registerReducer from './register/registerReducer.js';

const rootReducer = combineReducers({
	posts: postsReducer,
	register: registerReducer
})

export default rootReducer;
