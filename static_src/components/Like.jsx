import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import User from './User.jsx';
import { like_action } from '../actions/likes';
import { bindActionCreators } from 'redux';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import apiUrls from './../constants/apiUrls.js';
import SettingsIcon from '@material-ui/icons/Settings';


class Like extends React.Component{
    static propTypes = {
        id: PropTypes.number,
        author: PropTypes.number,
        isActive: PropTypes.bool,
    
    }
    state = {
        isActive: true,
        object_id: '10',
        content_type: 'post',
    };
    onClick= (e) => {
        console.log('onClick')
        if (this.state.isActive)
            this.setState({ isActive: true });
        else
            this.setState({ isActive: false });
        // this.setState({ object_id: true });
        // this.props.like_action(apiUrls.likes,{object_id:this.state.object_id,content_type:this.state.content_type });
    }
    
    render(){
        let like_icon;
        if (this.state.isActive) {
            like_icon = <FavoriteIcon/>
        }
        else {
            (like_icon = <SettingsIcon/>);
        }

        return( 
            <div>
                <IconButton aria-label="Like" onClick={ this.onClick } >
                    { like_icon }
                </IconButton>
            </div>
        );  
    }
}
const mapStateToProps = (state) => {
    return {
        isActive: state.isActive,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ like_action }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Like);