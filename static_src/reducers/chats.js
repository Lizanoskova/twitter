import update from 'react-addons-update';
import {} from './../actions/chats.js';


const initialState = {
    chatList: [],
    chats: {},
    isLoading: false,
};

export default function chats(store = initialState, action){
    switch(action.type){

        case 'START_CHAT_LOADING':{
            return update(store, {
                isLoading: { $set: true },
            });
        }

        case 'SUCCESS_CHAT_LOADING':{
            return update(store, {
                isLoading: { $set: false },
                chatList: { $set: action.payload.result },
                chats: { $merge: action.payload.entities.chats }
            });
        }

        case 'ERROR_CHAT_LOADING':{
            return update(store, {
                isLoading: { $set: false },
            });
        }
        default:
            return store;
    }
}