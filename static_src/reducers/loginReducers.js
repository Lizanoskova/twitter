import actionsList from "../actions/loginActions";
import Cookies from "js-cookie";
import update from 'react-addons-update';

const initialState = {
    isLogined: false
};
function loginReducer(store=initialState, action) {

    switch (action.type) {

        case actionsList.CHECK_LOG_IN:
            const jsId = Cookies.get('sessionid');
            // const jsId = document.cookie.match(/JSESSIONID=[^;]+/);
            console.log('loginReducer');
            if(jsId !== undefined)
            {
                console.log('logined');
                return update(store, {
                    isLogined: { $set: true },
                });
            }         
            else 
            {
                console.log('need to login');
                return update(store, {
                    isLogined: { $set: false },
                    
                });
            }

        case actionsList.LOG_IN:

            return update(store, {
                isLogined: { $set: true },
            });
                  
        case actionsList.LOG_OUT:
            return update(store, {
                isLogined: { $set: false },
            });
        default:
            return store;
    }
}

export default loginReducer;