import { combineReducers } from 'redux';
import logReducer from './log/logReducer.js'
import postDeleteReducer from './postDelete/postDeleteReducer.js';
import postNewReducer from './postNew/postNewReducer.js';
import postsReducer from './posts/postsReducer.js';
import profileReducer from './profile/profileReducer.js';
import profileUpdateReducer from './profileUpdate/profileUpdateReducer.js'
import registerReducer from './register/registerReducer.js';

const rootReducer = combineReducers({
	log: logReducer,
	postDelete: postDeleteReducer,
	postNew: postNewReducer,
	posts: postsReducer,
	profile: profileReducer,
	profileUpdate: profileUpdateReducer,
	register: registerReducer
})

export default rootReducer;
