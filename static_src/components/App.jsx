import React from 'react';
import PostList from './PostList.jsx';
import UserList from './UserList.jsx';
import EventList from './EventList.jsx';
import NavBar from './NavBar.jsx';
import PropTypes from 'prop-types';
import { Switch, Route, Link } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import 'typeface-roboto';


const theme = createMuiTheme();
class App extends React.Component{
    static propTypes = { 

    }
    state = {
        postList: [],
        eventList: [],
        userList: [],
        isLoading: false,
    }
   
    // onPostCreate = (post) => {
    //     this.setState({
    //         postList: [post, ...this.state.postList],
    //     });
    // }

    render(){
     
        return( 
            <MuiThemeProvider theme={theme}>
            <div>
                <NavBar/>
                {/* <EventList/> */}
                <Switch>
                    <Route exact path="/" component={ EventList }/>
                    <Route exact path="/user_list/" component={ UserList }/>
                    <Route exact path="/post_list/" component={ PostList }/>
                    <Route exact path="/notifications/" component={ PostList }/>
                </Switch>
            </div>
            </MuiThemeProvider>    
        );
    }
}
export default App;