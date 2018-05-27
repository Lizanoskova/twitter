import React from 'react';
import Post from './Post.jsx';
import PostList from './PostList.jsx';
import UserList from './UserList.jsx';
import PostForm from './PostForm.jsx';
import NavBar from './NavBar.jsx';
import PropTypes from 'prop-types';
import apiUrls from './../constants/apiUrls.js';
import { Switch, Route, Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import MyForm from './MyForm.jsx';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from "@material-ui/icons/Home";
import MessageIcon from '@material-ui/icons/Message';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import Notifications from '@material-ui/icons/Notifications';
import 'typeface-roboto';


const theme = createMuiTheme();
const MyLink = <Link to='/user_list/'>user_list</Link>
class App extends React.Component{
    static propTypes = { 

    }
    state = {
        postList: [],
        userList: [],
        isLoading: false,
    
    }
   
    onPostCreate = (post) => {
        this.setState({
            postList: [post, ...this.state.postList],
        });
    }

    render(){
     
        return( 
            <MuiThemeProvider theme={theme}>
            <div>
                <NavBar/>
                <Link to='/notifications/'>Notifications</Link>
                <Link to='/home/'>Home</Link>
                <Link to='/profile/'>Profile</Link>
                <Link to='/settings/'>Settings</Link>
                <Link to='/messages/'>Messages</Link>
                <Switch>
                    <Route exact path="/" component={ () => <h1>Hello</h1>}/>
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