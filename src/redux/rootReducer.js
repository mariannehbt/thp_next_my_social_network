import { combineReducers } from 'redux';
import logReducer from './log/logReducer.js'
import postNewReducer from './postNew/postNewReducer.js';
import postsReducer from './posts/postsReducer.js';
import profileReducer from './profile/profileReducer.js';
import registerReducer from './register/registerReducer.js';

const rootReducer = combineReducers({
	log: logReducer,
	postNew: postNewReducer,
	posts: postsReducer,
	profile: profileReducer,
	register: registerReducer
})

export default rootReducer;
