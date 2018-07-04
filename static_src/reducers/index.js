import{ combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import posts from './posts';
import users from './users';
import events from './events';
import { createForms } from 'react-redux-form';
import loginReducer from './loginReducers';
import session from './session.js';


const initialPost = { text: '', author : 'admin', blog : '1'};
export default combineReducers({
    // login: loginReducer,
    sessionInfo: session,
    posts,
    users,
    events,
    ...createForms({
        post: initialPost
      }),
    routing:routerReducer,
});