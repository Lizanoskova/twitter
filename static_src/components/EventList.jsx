import Event from './Event.jsx';
import PostForm from './PostForm.jsx';
import React from 'react';
import PropTypes from 'prop-types';
import apiUrls from './../constants/apiUrls';
import { loadEvents } from './../actions/events.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class EventList extends React.Component{
   static propTypes = {
        isLoading: PropTypes.bool,
        eventList: PropTypes.arrayOf(PropTypes.number), 
    }
  
    static defaultProps = {
        eventList: [],
        isLoading: false,
    }
    
    componentDidMount() {
        this.props.loadEvents(apiUrls.events);
    }
    
    render(){
        if(this.props.isLoading) {
            return (<div>Loading...</div>);
        }
     
        const events = this.props.eventList.map(
            item =>  <Event key = { item } id = { item }/>,
        );
        return( 
            
            <div className="event-list">
                <PostForm/>
                { events }
            </div>
        );
    }
}

const mapStateToProps = ({events}) => {
    return {
        eventList: events.eventList,
        isLoading: events.isLoading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ loadEvents }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(EventList);