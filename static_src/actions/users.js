import { CALL_API, apiMiddleware, getJSON } from 'redux-api-middleware';
import { normalize } from 'normalizr';
import { user } from './../utils/schemas.jsx';
export const START_USER_LOADING = 'START_USER_LOADING';
export const SUCCESS_USER_LOADING = 'SUCCESS_USER_LOADING';
export const ERROR_USER_LOADING = 'ERROR_USER_LOADING';


export const loadUsers = (url) => {
    return {
        [CALL_API]: {
            credentials: 'include',
            endpoint: url,
            method: 'GET',
            types: [START_USER_LOADING, 
                {
                    type: SUCCESS_USER_LOADING,
                    payload: (action, state, res) =>{
                        return getJSON(res).then(
                            (json) => {
                                const normalizedData = normalize(json, [user]);
                                // delete json;
                                return Object.assign({}, json, normalizedData);
                            },
                        );
                    },
                }, 
                    ERROR_USER_LOADING],
        },
    };
};