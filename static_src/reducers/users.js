import update from 'react-addons-update';
import {} from './../actions/users.js';


const initialState = {
    userList: [],
    users: {},
    isLoading: false,
};

export default function user(store = initialState, action){
    switch(action.type){

        case 'START_USER_LOADING':{
            return update(store, {
                isLoading: { $set: true },
            });
        }

        case 'SUCCESS_USER_LOADING':{
            return update(store, {
                isLoading: { $set: false },
                userList: { $set: action.payload.result },
                users : { $merge: action.payload.entities.users }
            });
        }

        case 'ERROR_USER_LOADING':{
            return update(store, {
                isLoading: { $set: false },
            });
        }
        default:
            return store;
    }
}