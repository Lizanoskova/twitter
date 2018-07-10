import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import User from './User.jsx';
import Like from './Like.jsx';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import CommentIcon from '@material-ui/icons/Comment';
import { Link } from 'react-router-dom';
import { deletePost } from '../actions/posts';
import { bindActionCreators } from 'redux';
import apiUrls from './../constants/apiUrls.js';

class Post extends React.Component{
    
    static propTypes = {
        id: PropTypes.number,
        author: PropTypes.number,
        blog: PropTypes.number,
        is_deleted: PropTypes.bool,
    }

    onClick=(e)=> {
        console.log('onClick')
        this.props.deletePost(apiUrls.posts,{is_deleted:true});
    }
    render(){
        let post;
        if (!this.props.is_deleted) {
            post =
            <Card >
            <CardHeader
                avatar={
                    <Avatar aria-label="Recipe">
                      R
                    </Avatar>
                  }
                action={
                <IconButton onClick={ this.onClick }>
                    <DeleteIcon />
                </IconButton>
                }
                title= {<Link to={"/user/1"}>
                    <User id = { this.props.author }/> 
                    </Link>}
                subheader={ new Date(this.props.created_at).toDateString() }
            />
            <CardContent>
                <Typography component="p">
                    { this.props.text } 
                </Typography>
            </CardContent>
            <CardActions  disableActionSpacing>
                {/* <IconButton aria-label="Like" onClick={() => { this.setState({ liked : true, })}} >
                    <FavoriteIcon />
                </IconButton> */}
                <Like/>
                <IconButton aria-label="Share">
                    <ShareIcon />
                </IconButton>
                <IconButton aria-label="Comment">
                    <CommentIcon/>
                </IconButton>
            </CardActions>
        </Card>
        }
        else {
            post = <div></div>
        }
        return( 


        <div>
             { post }  
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
    return bindActionCreators({ deletePost }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);