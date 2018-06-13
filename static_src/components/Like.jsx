import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import User from './User.jsx';


class Like extends React.Component{
    static propTypes = {
        id: PropTypes.number,
        author: PropTypes.number,
    
    }
    render(){

        return( 
            <div className="like">
                <div className="like__author">
                    <User id = { this.props.author }/>
                </div>
            
            </div>
        );
    }
}
const mapStateToProps = ({ likes }, ownProps ) => {
    return {
        ...likes.likes[ownProps.id],
    }
}

const mapDispatchToProps = (dispatch) => {
    return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(Like);