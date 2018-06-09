import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import User from './User.jsx';

class Event extends React.Component{
    static propTypes = {
        id: PropTypes.number,
        author: PropTypes.number,
        content_type: PropTypes.string,
        object: PropTypes.shape({
            author: PropTypes.number,
            content_type:PropTypes.string,
        }),
    
    }
    render(){

        return( 
            <div className="event">
                <div className="event__author">
                    <User id = { this.props.author }/>
                </div>
                <div className="event__content">{ this.props.content_type }</div> 
                <div className="event__content">{ this.props.object.content_type }</div>
                <div className="event__content">by{ this.props.object.author }</div>
            </div>
        );
    }
}
const mapStateToProps = ({ events }, ownProps ) => {
    return {
        ...events.events[ownProps.id],
    }
}

const mapDispatchToProps = (dispatch) => {
    return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(Event);