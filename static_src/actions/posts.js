import { CALL_API, apiMiddleware, getJSON, RSAA } from 'redux-api-middleware';
import { normalize } from 'normalizr';
import { post } from './../utils/schemas.jsx';
import Cookies from 'js-cookie';
export const START_TASK_LOADING = 'START_TASK_LOADING';
export const SUCCESS_TASK_LOADING = 'SUCCESS_TASK_LOADING';
export const ERROR_TASK_LOADING = 'ERROR_TASK_LOADING';
export const START_POST_SENDING = 'START_POST_SENDING';
export const SUCCESS_POST_SENDING = 'SUCCESS_POST_SENDING';
export const ERROR_POST_SENDING = 'ERROR_POST_SENDING';
export const START_POST_DELETING = 'START_POST_DELETING';
export const SUCCESS_POST_DELETING = 'SUCCESS_POST_DELETING';
export const ERROR_POST_DELETING = 'ERROR_POST_DELETING';

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
                                return Object.assign({}, json, normalizedData);
                            },
                        );
                    },
                }, 
                    ERROR_TASK_LOADING],
        },
    };
};


export const deletePost = (url,data) => {
    console.log('Delete')
    return {
        [RSAA]: {
            credentials: 'include',
            endpoint: url,
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get("csrftoken")
              },
            types: [START_POST_DELETING, 
                    SUCCESS_POST_DELETING,
                    ERROR_POST_DELETING],
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
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get("csrftoken")
              },
            types: [START_POST_SENDING, 
                    SUCCESS_POST_SENDING,
                    ERROR_POST_SENDING],
        },
    };
};