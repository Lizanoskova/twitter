import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import User from './User.jsx';
import AppBar from '@material-ui/core/AppBar';
const Liza = 'Liza';
const id = '1';


class Post extends React.Component{
    static propTypes = {
        id: PropTypes.number,
        author: PropTypes.number,
        blog: PropTypes.number,
    
    }
    render(){

        return( 
            <div className="post">
                <div className="post__author">
                    <User id = { this.props.author }/>
                </div>
                <AppBar />
                <div className="post__content">{ this.props.text }</div> 
            </div>
        );
    }
}
const mapStateToProps = ({ posts }, ownProps ) => {
    return {
        ...posts.posts[ownProps.id],
    }
}

const mapDispatchToProps = (dispatch) => {
    return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(Post);