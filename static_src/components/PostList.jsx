import Post from './Post.jsx';
import React from 'react';
import PropTypes from 'prop-types';
import apiUrls from './../constants/apiUrls';
import { loadPosts } from './../actions/posts.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class PostList extends React.Component{
   static propTypes = {
        isLoading: PropTypes.bool,
        postList: PropTypes.arrayOf(PropTypes.number),
    }
  
  
    static defaultProps = {
        postList: [],
        isLoading: false,
    }
    
    componentDidMount() {
        this.props.loadPosts(apiUrls.posts);
    }
    
    render(){
        if(this.props.isLoading) {
            return (<div>Loading...</div>);
        }
       
        const posts = this.props.postList.map(
            item =>  <Post key = { item } id = { item }/>,
        );
        return( 
            <div className="post-list">
                { posts }
            </div>
        );
    }
}

const mapStateToProps = ({ posts }) => {
    return {
        postList: posts.postList,
        isLoading: posts.isLoading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ loadPosts }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(PostList);