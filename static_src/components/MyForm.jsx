import React from 'react';
import { connect } from 'react-redux';
import { Form, Control, actions } from 'react-redux-form';
import apiUrls from './../constants/apiUrls.js'
import Cookies from 'js-cookie';
//import { isEmail, isEmpty } from 'validator';

const required = str => !isEmpty(str);

// const passwordsMatch = ({ password, confirmPassword }) => {
//   return password === confirmPassword;
// };

class MyForm extends React.Component {

    state = {
        text: '',
        blog_id: '',
        isLoading: false,
    }

  handleSubmit(post) {
    const { dispatch } = this.props;
    let postPromise = fetch(apiUrls.posts, {
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
    );

    dispatch(actions.submit('post', postPromise));
  }

  render() {
    return (
      <Form
        model="post"
        // validators={{
        // blog: { required }}}
        onSubmit={ (post) => this.handleSubmit(post) }
      >
        <label htmlFor="post.text">Text:</label>
        <Control.text model="post.text" id="post.text" />

        <label htmlFor="post.blog">Blog:</label>
        <Control.text model="post.blog" id="post.blog" />

        <button type="submit">
          Create))
        </button>
      </Form>
    );
  }
}

export default connect(null)(MyForm);