import { CALL_API, apiMiddleware, getJSON, RSAA } from 'redux-api-middleware';
import { normalize } from 'normalizr';
import { post } from './../utils/schemas.jsx';
export const START_TASK_LOADING = 'START_TASK_LOADING';
export const SUCCESS_TASK_LOADING = 'SUCCESS_TASK_LOADING';
export const ERROR_TASK_LOADING = 'ERROR_TASK_LOADING';
export const START_POST_SENDING = 'START_POST_SENDING';
export const SUCCESS_POST_SENDING = 'SUCCESS_POST_SENDING';
export const ERROR_POST_SENDING = 'ERROR_POST_SENDING';


export const loadPosts = (url) => {
    return {
        [CALL_API]: {
            credentials: 'include',
            endpoint: url,
            method: 'GET',
            types: [START_TASK_LOADING, 
                {
                    type: SUCCESS_TASK_LOADING,
                    payload: (action, state, res) =>{
                        return getJSON(res).then(
                            (json) => {
                                const normalizedData = normalize(json, [post]);
                                // delete json;
                                return Object.assign({}, json, normalizedData);
                            },
                        );
                    },
                }, 
                    ERROR_TASK_LOADING],
        },
    };
};

export const send = (url,data) => {
    console.log('SEND')
    return {
        [RSAA]: {
            credentials: 'include',
            endpoint: url,
            method: 'POST',
            types: [START_POST_SENDING, 
                {
                    type: SUCCESS_POST_SENDING,
                    body: data,
                }, 
                    ERROR_POST_SENDING],
        },
    };
};