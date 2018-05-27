import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import HomeIcon from "@material-ui/icons/Home";
import MessageIcon from '@material-ui/icons/Message';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import Notifications from '@material-ui/icons/Notifications';
import { Switch, Route, Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';


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
    return (
        <AppBar position="fixed"
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
            <ListItemLink to="/" primary="Home" icon={<HomeIcon />} />
            <ListItemLink to="/user_list/" primary="Profile" icon={<PersonIcon />} />
            <ListItemLink to="/" primary="Messages" icon={<MessageIcon />} />
            <ListItemLink to="/" primary="Notifications" icon={<Notifications />} />
            <ListItemLink to="/" primary="Settings" icon={<SettingsIcon />} />
          </Tabs>
        </AppBar>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
