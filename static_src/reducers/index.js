import{ combineReducers } from 'redux';
 import { routerReducer } from 'react-router-redux';
import posts from './posts';
import users from './users';
import events from './events';
import { createForms } from 'react-redux-form';
const initialPost = { text: '', author : 'admin', blog : '1'};
export default combineReducers({
    posts,
    users,
    events,
    ...createForms({
        post: initialPost
      }),
    routing:routerReducer,
});