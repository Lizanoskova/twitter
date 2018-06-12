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
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
    card: {
      maxWidth: 400,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    actions: {
      display: 'flex',
    },
    expand: {
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
      marginLeft: 'auto',
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  });
  
  
class Event extends React.Component{
    static propTypes = {
        id: PropTypes.number,
        author: PropTypes.number,
        content_type: PropTypes.string,
        object: PropTypes.object,
        // object: PropTypes.shape({
        //     author: PropTypes.number,
        //     content_type:PropTypes.string,
        // }),
    
    }
    render(){
        // const { classes } = this.props;

        return( 


            <div>
                <Card >
                <CardHeader
                    action={
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title={ this.props.object.title}
                    subheader={ this.props.object.created_at }
                />
                <CardContent>
                    <Typography component="p">
                        { this.props.object.text } 
                    </Typography>
                </CardContent>
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