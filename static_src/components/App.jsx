import React from 'react';
import Post from './Post.jsx';
import PostList from './PostList.jsx';
import UserList from './UserList.jsx';
import PostForm from './PostForm.jsx';
import PropTypes from 'prop-types';
import apiUrls from './../constants/apiUrls.js';
import { Switch, Route, Link } from 'react-router-dom';
//import ToolBar from '@material-ui/core/ToolBar';
import RaisedButton from 'material-ui/RaisedButton';
import MyForm from './MyForm.jsx';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
// import { MuiThemeProvider} from 'material-ui/styles';
// import { createMuiTheme } from 'material-ui/styles';
// import {grey, amber, red} from 'material-ui/styles/colors';
// import { createPalette } from 'material-ui/styles';
//import { withStyles } from 'material-ui/styles';
import { withStyles } from '@material-ui/core/styles';
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

    // handleChange = (event, value) => {
    //     this.setState({ value });
    // };

    render(){
     
        return( 
            <MuiThemeProvider theme={theme}>
            <div>
            <Button component={Link} to='/user_list/' >
                Usr_List
            </Button>

            <AppBar position="static">
                <Tabs >
                    <Tab icon={<PhoneIcon />} />
                    <Tab icon={<FavoriteIcon />} />
                    <Tab icon={<PersonPinIcon />} />
                    <Tab icon={<HelpIcon />} />
                    <Tab icon={<ShoppingBasket />} />
                    <Tab icon={<ThumbDown />} />
                    <Tab icon={<ThumbUp />} />
                </Tabs>
            </AppBar>
                <Link to='/notifications/'>Notifications</Link>
                <Link to='/home/'>Home</Link>
                <Link to='/profile/'>Profile</Link>
                <Link to='/settings/'>Settings</Link>
                <Link to='/messages/'>Messages</Link>
                {/* <AppBar >
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            Title
                        </Typography>
                    </Toolbar> 
                </AppBar> */}
                {/* <RaisedButton label="Default" /> */}
                <Switch>
                    <Route exact path="/" component={ () => <h1>Hello</h1>}/>
                    <Route exact path="/user_list/" component={ UserList }/>
                    <Route exact path="/post_list/" component={ PostList }/>
                    <Route exact path="/notifications/" component={ PostList }/>
                </Switch>
                {/* <PostForm onCreate={ this.onPostCreate }  />  */}
                {/*<MyForm/>*/}
                {/*<PostList isLoading={ this.state.isLoading } postList={ this.state.postList }/>*/}
                {/*<h1>USER LIST</h1>*/}
                {/*<UserList isLoading={ this.state.isLoading } userList={ this.state.userList }/>*/}
            </div>
            </MuiThemeProvider>    
        );
    }
}
export default App;