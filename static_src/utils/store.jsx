import { createStore, applyMiddleware, compose } from 'redux';
import initReducers from './../reducers';
import middlewares from './../middlewares';
import { createForms } from 'react-redux-form';


function initStore(additionalMiddlewares = []){
    const initialStore = {};
    return createStore(
        initReducers,
        initialStore,
        compose(applyMiddleware(...additionalMiddlewares, ...middlewares), window.__REDUX_DEVTOOLS_EXTENSION__()),
    );
}
export default initStore;