import React from 'react';
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { connect } from 'react-redux';
import store from './../test.jsx';
import Cookies from 'js-cookie';
import Redirect from 'react-router-dom/es/Redirect';



class LoginModal extends React.Component {

    handleOnClick = () => {
        store.dispatch(loginModalShow(false));
        this.setState({ redirect: true });
    };

    render() {
        if (this.state !== null && this.state.redirect) {
            return <Redirect push to="/"/>;
        }
        return (
            <div className="login-modal">
            <div>
                <Modal open={this.props.loginModalIsVisible} onClose={() => dispatch(loginModalShow(false))}>
                        <div>
                        <div>Войти</div>
                        <LoginForm/>
                        <div>
                            <a href="/oauth2/login/github/">Login with GitHub</a>
                            {/* <a href="{% url 'social:begin' 'github' %}">Login with GitHub</a> */}
                        </div>
        
                        <Button onClick={this.handleOnClick}>Назад</Button>
                        </div>
                </Modal>
            </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        loginModalIsVisible: state.loginModalIsVisible,
    };
};

export default connect(mapStateToProps)(LoginModal);

