import { CALL_API, apiMiddleware, getJSON, RSAA } from 'redux-api-middleware';
import { normalize } from 'normalizr';
import { chat } from './../utils/schemas.jsx';
import Cookies from 'js-cookie';
export const START_CHAT_LOADING = 'START_CHAT_LOADING';
export const SUCCESS_CHAT_LOADING = 'SUCCESS_CHAT_LOADING';
export const ERROR_CHAT_LOADING = 'ERROR_CHAT_LOADING';



export const loadChats = (url) => {
    return {
        [CALL_API]: {
            credentials: 'include',
            endpoint: url,
            method: 'GET',
            types: [START_CHAT_LOADING, 
                {
                    type: SUCCESS_CHAT_LOADING,
                    payload: (action, state, res) =>{
                        return getJSON(res).then(
                            (json) => {
                                const normalizedData = normalize(json, [chat]);
                                return Object.assign({}, json, normalizedData);
                            },
                        );
                    },
                }, 
                    ERROR_CHAT_LOADING],
        },
    };
};
