import { createStore, applyMiddleware, compose } from 'redux';
import initReducers from './../reducers';
import middlewares from './../middlewares';
import { createForms } from 'react-redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import myMiddlewares from '../middlewares';

function initStore(initialState){
    return createStore(
        initReducers,
        initialState,
        composeWithDevTools(applyMiddleware(apiMiddleware, ...myMiddlewares, thunk)),
    );
}
export default initStore;