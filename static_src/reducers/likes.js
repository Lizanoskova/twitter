import update from 'react-addons-update';
import {} from './../actions/likes.js';


const initialState = {

    liked: false,
};

export default function posts(store = initialState, action){
    switch(action.type){

        case 'START_LIKING':{
            return true;
        }

        case 'SUCCESS_LIKING':{
            return true;
        }

        case 'ERROR_LIKING':{
            return true;
        }
        default:
            return store;
    }
}