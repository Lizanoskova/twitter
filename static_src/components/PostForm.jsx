import React from 'react';
import apiUrls from './../constants/apiUrls.js'
import Cookies from 'js-cookie';

class PostForm extends React.Component{
    static propTypes = {

    }
    state = {
        text: '',
        blog_id: '',
        isLoading: false,
    }

    onChange = (e) => {
        this.setState({ [e.target.name]:e.target.value });
    }

    onClick = (e) => {
        e.preventDefault();
        if(this.state.isLoading){
            return;
        }
        this.setState({ isLoading: true });
        fetch(apiUrls.posts, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(this.state),
            headers: {
                'content-type': 'application/json',
                "X-CSRFToken": Cookies.get("csrftoken"),
            }
        }).then(
            body =>body.json(),
        ).then(
            (json) => {
                this.setState({ isLoading: false });
                return this.props.onCreate(json); 
            },
        )
        }
        


    render(){

        return( 
            <div className="create-form">
                <h2>Форма добавления</h2>
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
export default PostForm;