import React from 'react';
import apiUrls from './../constants/apiUrls.js'
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
        // author: 'admin',
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
        return( 
            // <div>
            //     <div>Create Post</div>
            //         <FormControl >
            //         <InputLabel htmlFor="name-simple">Blog</InputLabel>
            //         <Input
            //             id="name-simple"
            //             value={this.state.blog}
            //             onChange={this.onChange}
            //         />
            //         <InputLabel htmlFor="name-helper">Text</InputLabel>
            //         <Input
            //             id="name-helper"
            //             value={this.state.text}
            //             onChange={this.onChange}
            //         />
            //         <FormHelperText id="name-helper-text">
            //             no more 256 symbols
            //         </FormHelperText>
                    
            //         <Button color="primary" onClick={ this.onClick } >
            //         Send
            //         <Icon >send</Icon>
            //         </Button>
            //         </FormControl>
            // </div>
          
            <div className="create-form">
                <h2>Create post</h2>
                <form>
                    {/* <input type="hidden" name="csrfmiddlewaretoken" value={csrf}/> */}
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
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ send }, dispatch)
}
export default connect(null,mapDispatchToProps)(PostForm);

   // url = apiUrls.posts;
    // data = {
    //   text: this.state.text,
    //   blog_id: this.state.blog_id,
    // };


 // export default connect(null,mapDispatchToProps)(PostForm);
// const mapDispatchToProps = (dispatch) => {
   
//   return {
//       send: () => dispatch(send)
//   };
// };

// export default PostForm;


// import React from "react";
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
// import Input from "@material-ui/core/Input";
// import Button from "@material-ui/core/Button";
// import InputLabel from "@material-ui/core/InputLabel";
// import FormHelperText from "@material-ui/core/FormHelperText";
// import FormControl from "@material-ui/core/FormControl";
// import Icon from "@material-ui/core/Icon";

// const styles = theme => ({
//   container: {
//     display: "flex",
//     flexWrap: "wrap"
//   },
//   formControl: {
//     margin: theme.spacing.unit
//   },
//   rightIcon: {
//     marginLeft: theme.spacing.unit
//   }
// });
// class PostForm extends React.Component {
 
//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };
//   state = {
//     text: '',
//     blog_id: '',
//     isLoading: false,
// }

// // onChange = (e) => {
// //     this.setState({ [e.target.name]:e.target.value });
// // }

//   render() {
//     const { classes } = this.props;

//     return (
       
    //   <div className={classes.container}>
    //      <div>Create Post</div>
    //     <FormControl className={classes.formControl}>
    //       <InputLabel htmlFor="name-simple">Blog</InputLabel>
    //       <Input
    //         id="name-simple"
    //         value={this.state.blog}
    //         onChange={this.handleChange}
    //       />
    //     </FormControl>
    //     <FormControl
    //       className={classes.formControl}
    //       aria-describedby="name-helper-text"
    //     >
    //       <InputLabel htmlFor="name-helper">Text</InputLabel>
    //       <Input
    //         id="name-helper"
    //         value={this.state.text}
    //         onChange={this.handleChange}
    //       />
    //       <FormHelperText id="name-helper-text">
    //         no more 256 symbols
    //       </FormHelperText>
    //     </FormControl>
    //     <Button variant="contained" color="primary" className={classes.button}>
    //       Send
    //       <Icon className={classes.rightIcon}>send</Icon>
    //     </Button>
    //   </div>
//     );
//   }
// }

// PostForm.propTypes = {
//   classes: PropTypes.object.isRequired
// };

//  const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({ send }, dispatch)
// }
// export default connect(null,mapDispatchToProps)(PostForm);
