import React from 'react';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import { logOut } from './../actions/loginActions';
import store from './../test.jsx';
import Redirect from 'react-router-dom/es/Redirect';

class MyAccount extends React.Component {

    render() {
        if (!this.props.login) {
            return <Redirect push to="/" />

        }

        const info = this.props.sessionInfo.data;
        return (
            <Grid>
                
                   
                        <h3>{info.username}</h3>
                        Имя: {info.first_name}<br/>
                        Фамилия: {info.last_name}<br/>
                        email: {info.email}<br/>
                        <Button onClick={()=>store.dispatch(logOut())}>Выйти из аккаунта</Button>
                   
               
            </Grid>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        loginModalShow: () => dispatch(loginModalShow(true)),
        logOut: () => dispatch(logOut)
    };
};

const mapStateToProps = (state) => {
    return {
        sessionInfo: state.sessionInfo,
        login: state.login
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount);