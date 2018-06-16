import { RSAA } from 'redux-api-middleware';


const actionsList = {
    CHECK_LOG_IN: 'CHECK_LOG_IN',
    LOG_IN: 'LOG_IN',
    LOG_OUT: 'LOG_OUT',

    // SESSION_USER_LOADING: 'SESSION_USER_LOADING',
    // SESSION_USER_SUCCESS: 'SESSION_USER_SUCCESS',
    // SESSION_USER_LOADING_FAILURE: 'SESSION_USER_LOADING_FAILURE',
};

export function checkLogin() {
    return {
        type: actionsList.CHECK_LOG_IN
    }
}

export function logIn() {
    return {
        type: actionsList.LOG_IN,
    };
}

export function logOut() {
    return {
        type: actionsList.LOG_OUT,
    };
}

// export function loadSessionUserInfo (url, method = 'GET') {

//     return {
//         [RSAA]:
//             {
//                 credentials: 'include',
//                 endpoint: url,
//                 method: method,
//                 types: [
//                     actionsList.SESSION_USER_LOADING,
//                     actionsList.SESSION_USER_SUCCESS,
//                     actionsList.SESSION_USER_LOADING_FAILURE,
//                 ],
//             },
//     };
// }




export default actionsList;