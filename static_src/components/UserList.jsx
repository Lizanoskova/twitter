import User from './User.jsx';
import React from 'react';
import PropTypes from 'prop-types';
import apiUrls from './../constants/apiUrls';
import { loadUsers } from './../actions/users.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class UserList extends React.Component{
   static propTypes = {
        isLoading: PropTypes.bool,
        userList: PropTypes.arrayOf(PropTypes.number),
    }
  
  
    static defaultProps = {
        userList: [],
        isLoading: false,
    }
    
    componentDidMount() {
        this.props.loadUsers(apiUrls.users);
    }
    
    render(){
        if(this.props.isLoading) {
            return (<div>Loading...</div>);
        }
       
        const users = this.props.userList.map(
            item =>  <User key = { item } id = { item }/>,
        );
        return( 
            <div className="user-list">
                { users }
            </div>
        );
    }
}

const mapStateToProps = ({ users }) => {
    return {
        userList: users.userList,
        isLoading: users.isLoading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ loadUsers }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(UserList);