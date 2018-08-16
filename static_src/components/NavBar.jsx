import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HomeIcon from "@material-ui/icons/Home";
import Button from '@material-ui/core/Button';
import MessageIcon from '@material-ui/icons/Message';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import Notifications from '@material-ui/icons/Notifications';
import { Switch, Route, Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';



const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
});

class ListItemLink extends React.Component {
    renderLink = itemProps => <Link to={this.props.to} {...itemProps} />;
  
    render() {
      const { icon, primary } = this.props;
      return (
          <ListItem button component={this.renderLink}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={primary} />
          </ListItem>
      );
    }
  }
  
  ListItemLink.propTypes = {
    icon: PropTypes.node.isRequired,
    primary: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
  };

class NavBar extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    let account;
    let notifications;
    let messages;
    let news;
    if (this.props.sessionInfo.isLogined) {
        account =
          <ListItemLink to="/profile" primary="Profile" icon={<PersonIcon />} />
        notifications =
          <ListItemLink to="/notifications" primary="Notifications" icon={<Notifications />} />
        messages =
          <ListItemLink to="/chat_list/" primary="Messages" icon={<MessageIcon />} />
        news =
          <ListItemLink to="/" primary="News" icon={<HomeIcon />} />
    }
    else {
        account = <Button href = 'http://localhost:3000/login/'>Login/Registration</Button>
        // <ListItemLink to="/login" primary="Login/Registration" icon={<PersonIcon />} />
        notifications = <div></div>
        messages = <div></div>
        news = <ListItemLink to="/" primary="News" icon={<HomeIcon />} />
        
    }
    return (
        <AppBar position="sticky"
                color="default"
        > 
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            fullWidth
            indicatorColor="primary"
            textColor="primary"
            scrollButtons='on'
          >
              { news }
              { notifications }
              { messages }
              { account }

          </Tabs>
        </AppBar>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const mapStateToProps = (state) => {
  return {
      sessionInfo: state.sessionInfo,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

