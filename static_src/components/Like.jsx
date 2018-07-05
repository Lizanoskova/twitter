import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import User from './User.jsx';


class Like extends React.Component{
    static propTypes = {
        id: PropTypes.number,
        author: PropTypes.number,
    
    }
    state = {
        liked: false
    };
    render(){

        return( 
            <div>
                <IconButton aria-label="Like" onClick={() => { this.setState({ liked : true })}} >
                    <FavoriteIcon />
                </IconButton>
            </div>
        );  
    }
}
// const mapStateToProps = ({ likes }, ownProps ) => {
//     return {
//         ...likes.likes[ownProps.id],
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {};
}
export default connect(null, mapDispatchToProps)(Like);