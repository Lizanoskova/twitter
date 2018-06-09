import Post from './Post.jsx';
import Comment from './Comment.jsx';
import Like from './Like.jsx';
import Blog from './Blog.jsx';
import Submission from './Submission.jsx';
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
        commentList: PropTypes.arrayOf(PropTypes.number),
        likeList: PropTypes.arrayOf(PropTypes.number),
        blogList: PropTypes.arrayOf(PropTypes.number),
        submissionList: PropTypes.arrayOf(PropTypes.number),
    }
  
  
    static defaultProps = {
        postList: [],
        commentList: [],
        likeList: [],
        blogList: [],
        submissionList: [],     
        isLoading: false,
    }
    
    componentDidMount() {
        this.props.loadPosts(apiUrls.posts);
        this.props.loadComments(apiUrls.comments);
        this.props.loadLikes(apiUrls.likes);
        this.props.loadBlogs(apiUrls.blogs);
        this.props.loadSubmissions(apiUrls.submisions);
    }
    
    render(){
        if(this.props.isLoading) {
            return (<div>Loading...</div>);
        }
       
        const posts = this.props.postList.map(
            item =>  <Post key = { item } id = { item }/>,
        );
        const comments = this.props.commentList.map(
            item =>  <Comment key = { item } id = { item }/>,
        );
        const likes = this.props.likeList.map(
            item =>  <Like key = { item } id = { item }/>,
        );
        const blogs = this.props.blogList.map(
            item =>  <Blog key = { item } id = { item }/>,
        );
        const submissions = this.props.submissionList.map(
            item =>  <Submission key = { item } id = { item }/>,
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