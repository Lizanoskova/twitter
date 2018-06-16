import Cookies from 'js-cookie';
export const logger = store => next => (action) => {
    console.log('dispatching', action);
    console.log(Cookies.get('sessionid')); 
    const result = next(action);
    console.log('next state', store.getState());
    return result;
};