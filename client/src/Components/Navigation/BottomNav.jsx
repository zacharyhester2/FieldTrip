import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CameraAltSharpIcon from '@material-ui/icons/CameraAltSharp';
import EmojiPeopleSharpIcon from '@material-ui/icons/EmojiPeopleSharp';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: '0',
    width: '100%'
  },
});

const BottomNav = () => {
  const classes = useStyles();
  const [value, setValue] = useState('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>

      <BottomNavigationAction
        label="Discovery"
        value="discovery"
        icon={<SearchSharpIcon />}
        component={Link}
        to="/discovery"
      />

      <BottomNavigationAction
        label="Profile"
        value="profile"
        icon={<EmojiPeopleSharpIcon />}
        component={Link}
        to="/profile"
      />

      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<HomeSharpIcon />}
        component={Link}
        to="/home"
      />

      <BottomNavigationAction
        label="Alerts"
        value="alerts"
        icon={<NotificationsSharpIcon />}
        component={Link}
        to="/alerts"
      />

      <BottomNavigationAction
        label="Camera"
        value="photoUpload"
        icon={<CameraAltSharpIcon />}
        component={Link}
        to="/PhotoUpload"
      />

    </BottomNavigation>
  );
}

export default BottomNav;