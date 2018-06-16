import { createStore, applyMiddleware, compose } from 'redux';
import initReducers from './../reducers';
import middlewares from './../middlewares';
import { createForms } from 'react-redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import myMiddlewares from '../middlewares';

function initStore(initialState){
    // const initialStore = {};
    return createStore(
        initReducers,
        initialState,
        composeWithDevTools(applyMiddleware(apiMiddleware, ...myMiddlewares, thunk)),
        // compose(applyMiddleware(...additionalMiddlewares, ...middlewares), window.__REDUX_DEVTOOLS_EXTENSION__()),
    );
}
export default initStore;