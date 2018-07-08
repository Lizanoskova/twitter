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

class Chat extends React.Component{
    
    static propTypes = {
        user_1: PropTypes.number,
        user_2: PropTypes.number,
        messages_count: PropTypes.number,
    }
    render(){

        return( 


            <div>
                <Card >
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe">
                          R
                        </Avatar>
                      }
                    action={
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                    }
                    title= {<Link to={"/user/1"}>
                        <User id = { this.props.user_2 }/> 
                        </Link>}
                    subheader={ new Date(this.props.created_at).toDateString() }
                />
                {/* <CardContent>
                    <Typography component="p">
                        { this.props.text } 
                    </Typography>
                </CardContent> */}
            </Card>
        </div>
    );
  }
}

const mapStateToProps = ({ chats }, ownProps ) => {
    return {
        ...chats.chats[ownProps.id],
    }
}

const mapDispatchToProps = (dispatch) => {
    return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(Chat);