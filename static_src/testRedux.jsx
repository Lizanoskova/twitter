import{ createStore, combineReducers, applyMiddleware, compose } from 'redux';

export const logger1 = store => next => (action) => {
    console.log('1 logger', action);
    const result = next(action);
   
    return result;
};
export const logger2 = store => next => (action) => {
    console.log('2 logger', action);
    const result = next(action);
   
    return result;
};
const postsReducer = (store = { postList: [] }, action) => {
   
    switch (action.type)
    {
        case "CREATE_POST":
            return { postList: [action.payload, ...store.postList] }
        default:
            return store;
    }

    return store;
};

const usersReducer = (store = { userList: [] }, action) => {

    return store;
};
const reducer = combineReducers({
    posts: postsReducer,
    users: usersReducer,
});
const initialStore = { };
const middlewares = applyMiddleware();
const store = createStore(reducer, initialStore, compose(middlewares, window.__REDUX_DEVTOOLS_EXTENSION__()));


store.subscribe(
    () => {
        console.log("subscriber 1", store.getState() );
    },
);

store.subscribe(
    () => {
        console.log("subscriber 2", store.getState() );
    },
);

store.dispatch({
    type: "CREATE_POST",
    payload: "New post",
});

store.dispatch({
    type: "CREATE_POST",
    payload: "New post",
});
