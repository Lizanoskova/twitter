import Chat from './Chat.jsx';
import React from 'react';
import PropTypes from 'prop-types';
import apiUrls from './../constants/apiUrls';
import { loadChats } from './../actions/chats.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class ChatList extends React.Component{
   static propTypes = {
        isLoading: PropTypes.bool,
        chatList: PropTypes.arrayOf(PropTypes.number), 
    }
  
    state = {
    expanded: null,
  };
    static defaultProps = {
        chatList: [],
        isLoading: false,
    }
    
    componentDidMount() {
        this.props.loadChats(apiUrls.chats);
    }
    
    render(){
        if(this.props.isLoading) {
            return (<div>Loading...</div>);
        }
        
        const chats = this.props.chatList.map(
            item =>  <Chat key = { item } id = { item }/>,
        );
        return( 
            
            <div className="chat-list">
            <h1>Мои сообщения</h1>
                { chats }
            </div>
        );
    }
}

const mapStateToProps = ({ chats }) => {
    return {
        chatList: chats.chatList,
        isLoading: chats.isLoading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ loadChats }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ChatList);