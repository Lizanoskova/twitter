import React from 'react';
import PostList from './PostList.jsx';
import UserList from './UserList.jsx';
import EventList from './EventList.jsx';
import ChatList from './ChatList.jsx';
import Login from './Login.jsx';
import NavBar from './NavBar.jsx';
import PropTypes from 'prop-types';
import { Switch, Route, Link } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import 'typeface-roboto';
import MyAccount from './MyAccount.jsx';




const theme = createMuiTheme();
class App extends React.Component{
    static propTypes = { 

    }
    state = {
        postList: [],
        eventList: [],
        userList: [],
        chatList: [],
        isLoading: false,
    }
   


    render(){
     
        return( 
            <MuiThemeProvider theme={theme}>
            <div>
                <NavBar/>
                <Switch>
                    <Route exact path="/" component={ EventList }/>
                    <Route exact path="/chat_list" component={ ChatList }/>
                    <Route exact path="/user_list/" component={ UserList }/>
                    <Route exact path="/post_list/" component={ PostList }/>
                    <Route path="/profile" component={ MyAccount }/>
                    <Route path="/login1" component={ Login }/>
                    <Route exact path="/notifications/" component={ PostList }/>
                </Switch>
            </div>
            </MuiThemeProvider>    
        );
    }
}
export default App;