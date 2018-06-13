import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import User from './User.jsx';
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

class Event extends React.Component{
    
    static propTypes = {
        id: PropTypes.number,
        author: PropTypes.number,
        content_type: PropTypes.string,
        object: PropTypes.object,
         //maybe shape is better   
    }
    state = {
        liked: false,
      };
    render(){
        const { liked } = this.state;

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
                        <User id = { this.props.author }/> 
                        </Link>}
                    subheader={ new Date(this.props.object.created_at).toDateString() }
                />
                <CardContent>
                    <Typography component="p">
                        { this.props.object.text } 
                    </Typography>
                </CardContent>
                <CardActions  disableActionSpacing>
                    <IconButton aria-label="Like" onClick={() => { this.setState({ liked : true, })}} >
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="Share">
                        <ShareIcon />
                    </IconButton>
                    <IconButton aria-label="Comment">
                        <CommentIcon/>
                    </IconButton>
                </CardActions>
                {/* <CardActions className={classes.actions} disableActionSpacing>
                    <IconButton aria-label="Add to favorites">
                    <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="Share">
                    <ShareIcon />
                    </IconButton>
                    <IconButton
                    className={classnames(classes.expand, {
                        [classes.expandOpen]: this.state.expanded,
                    })}
                    onClick={this.handleExpandClick}
                    aria-expanded={this.state.expanded}
                    aria-label="Show more"
                    >
                    <ExpandMoreIcon />
                    </IconButton>
                </CardActions> */}
            </Card>
        </div>
    );
  }
}
//             <div className="event">
//                 <div className="event__author">
//                     <User id = { this.props.author }/>
//                 </div>
//                 <div className="event__content">{ this.props.content_type }</div> 
//                 <div className="event__content">{ this.props.object.title}</div>
//                 <div className="event__content">{ this.props.object.text } by { this.props.object.author.username } ---------------</div>
//                 <div className="event__content">{ this.props.object.created_at }</div>
//                 <div className="event__content">{ this.props.object.content_type }</div>
//             </div>
//         );
//     }
// }
const mapStateToProps = ({ events }, ownProps ) => {
    return {
        ...events.events[ownProps.id],
    }
}

const mapDispatchToProps = (dispatch) => {
    return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(Event);