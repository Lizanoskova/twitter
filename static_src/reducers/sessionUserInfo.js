import actionList from "../actions/loginActions";
import Cookies from "js-cookie";


export function sessionUserInfoError(state, action) {
    switch (action.type) {
        case actionList.SESSION_USER_LOADING_FAILURE:
            return true;

        default:
            return false;
    }
}

export function sessionUserInfoIsLoading(state=false, action) {
    switch (action.type) {
        case actionList.SESSION_USER_LOADING:
            return true;
        case actionList.SESSION_USER_SUCCESS:
            return false;
        default:
            return state;
    }
}

export function sessionUserInfo(state=null, action) {
    switch (action.type) {
        case actionList.SESSION_USER_SUCCESS:
            return action.payload;
        case actionList.LOG_OUT:
            Cookies.remove('sessionid');
            return {};

        default:
            return state;
    }
}