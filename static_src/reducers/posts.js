import update from 'react-addons-update';
import {} from './../actions/posts.js';


const initialState = {
    postList: [],
    posts: {},
    isLoading: false,
};

export default function posts(store = initialState, action){
    switch(action.type){

        case 'START_TASK_LOADING':{
            return update(store, {
                isLoading: { $set: true },
            });
        }

        case 'SUCCESS_TASK_LOADING':{
            return update(store, {
                isLoading: { $set: false },
                postList: { $set: action.payload.result },
                posts: { $merge: action.payload.entities.posts }
            });
        }

        case 'ERROR_TASK_LOADING':{
            return update(store, {
                isLoading: { $set: false },
            });
        }
        default:
            return store;
    }
}