import { RSAA } from 'redux-api-middleware';


const actionsList = {
    CHECK_LOG_IN: 'CHECK_LOG_IN',
    LOG_IN: 'LOG_IN',
    LOG_OUT: 'LOG_OUT',

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



export default actionsList;