import { CALL_API, apiMiddleware, getJSON, RSAA } from 'redux-api-middleware';
import { normalize } from 'normalizr';
import { like } from './../utils/schemas.jsx';
import Cookies from 'js-cookie';
export const START_LIKING = 'START_LIKING';
export const SUCCESS_LIKING = 'SUCCESS_LIKING';
export const ERROR_LIKING = 'ERROR_LIKING';


export const like_action = (url,data) => {
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
            types: [START_LIKING, 
                    SUCCESS_LIKING,
                    ERROR_LIKING],
        },
    };
};