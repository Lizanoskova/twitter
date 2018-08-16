import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class User extends React.Component{
    static propTypes = {
        id: PropTypes.number,
        username: PropTypes.string,
    
    }
    render(){

        return( 
            <div className="user">
                <div className="username">{ this.props.username}</div>
            </div>
        );
    }
}
const mapStateToProps = ({ users }, ownProps ) => {
    return {
        ...users.users[ownProps.id],
    }
}

const mapDispatchToProps = (dispatch) => {
    return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(User);
// export default User;