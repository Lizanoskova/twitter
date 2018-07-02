import{ combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import posts from './posts';
import users from './users';
import events from './events';
import { createForms } from 'react-redux-form';
import loginReducer from './loginReducers';
import { sessionUserInfo, sessionUserInfoError, sessionUserInfoIsLoading } from './sessionUserInfo';
const initialPost = { text: '', author : 'admin', blog : '1'};
export default combineReducers({
    login: loginReducer,
    sessionInfo: combineReducers({
        error: sessionUserInfoError,
        is_loading: sessionUserInfoIsLoading,
        data: sessionUserInfo
    }),
    posts,
    users,
    events,
    ...createForms({
        post: initialPost
      }),
    routing:routerReducer,
});