import React from 'react';
import apiUrls from './../constants/apiUrls.js';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import { send } from '../actions/posts';
import { bindActionCreators } from 'redux';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";


class PostForm extends React.Component{
    static propTypes = {

    }
    state = {
        text: '',
        blog_id: '',
        isLoading: false,
    }
    onChange = (e) => {
        console.log('onChange')
        this.setState({ [e.target.name]:e.target.value });
    }
    onClick=(e)=> {
        console.log('onClick')
        this.props.send(apiUrls.posts,{text:this.state.text,blog_id: this.state.blog_id });
    }

    render(){

        if(!this.props.sessionInfo.isLogined) {
            return (<div></div>);
        }
        return( 
            <div className="create-form">
                <h2>Create post</h2>
                <form>
                    <div className="form-field-wrapper">
                        <textarea onChange={ this.onChange } value={ this.state.text }className="form-field" type="text" name="text" placeholder="Text"/>
                    </div>
                    
                    <div className="form-field-wrapper">
                        <input onChange={ this.onChange } value={ this.state.blog }className="form-field" name="blog_id" placeholder="Blog"/>
                    </div>
                    <div className="form-field-wrapper">
                        <button onClick={ this.onClick }>Create</button>
                    </div>
                </form>
            </div>
                
        );
    }
}
const mapStateToProps = (state) => {
    return {
        sessionInfo: state.sessionInfo,
    };
  };
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ send }, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(PostForm);
