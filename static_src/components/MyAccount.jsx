import React from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { logOut } from './../actions/loginActions';
import store from './../test.jsx';
import Redirect from 'react-router-dom/es/Redirect';
import PostList from './PostList.jsx';
import { bindActionCreators } from 'redux';

class MyAccount extends React.Component {

    onClick=(e)=> {
        console.log('onClick')
        this.props.logOut();
    }

    render() {
        if (!this.props.sessionInfo.isLogined) {
            return <Redirect push to="/"/>

        }

        const info = this.props.sessionInfo.data;
        return (
            <Grid>
                
                   
                        <h3>{info.username}</h3>
                        email: {info.email}<br/>
                        {/* <Button href = 'http://localhost:3000/logout/' onClick={ this.onClick }>Выйти из аккаунта</Button> */}
                        <Button onClick={ this.onClick }>Выйти из аккаунта</Button>
                        <h1>Мои посты</h1>
                        <PostList/>
                        

            </Grid>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ logOut }, dispatch)
};

const mapStateToProps = (state) => {
    return {
        sessionInfo: state.sessionInfo,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount);

