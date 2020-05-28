import { combineReducers } from 'redux';
import loginReducer from './login/loginReducer.js'
import postsReducer from './posts/postsReducer.js';
import registerReducer from './register/registerReducer.js';

const rootReducer = combineReducers({
	login: loginReducer,
	posts: postsReducer,
	register: registerReducer
})

export default rootReducer;
