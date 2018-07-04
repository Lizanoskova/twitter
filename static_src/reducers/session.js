// import actionList from "../actions/loginActions";
import update from 'react-addons-update';
import {} from './../actions/loginActions.js';

const initialState = {
    isLogined: false,
    data: {}
};

export default function session(store = initialState, action){
    switch(action.type){
        case 'START_SESSION_LOADING':{
            return store;
        }
        case 'SUCCESS_SESSION_LOADING':{
            console.log('logined');
            return update(store, {
                isLogined: { $set: true },  
                data: { $set: action.payload }
            });
        }
        case 'ERROR_SESSION_LOADING':{
            console.log('need to login');
            return update(store, {
                isLogined: { $set: false },
            });
        }
        default:
            return store;
    }
}
