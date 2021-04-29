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
import Divider from '@material-ui/core/Divider';

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

      <Divider orientation="vertical" flexItem />

      <BottomNavigationAction
        label="Discovery"
        value="discovery"
        icon={<SearchSharpIcon />}
        component={Link}
        to="/discovery"
      />
      <Divider orientation="vertical" flexItem />

      <BottomNavigationAction
        label="Profile"
        value="profile"
        icon={<EmojiPeopleSharpIcon />}
        component={Link}
        to="/profile"
      />
      <Divider orientation="vertical" flexItem />

      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<HomeSharpIcon />}
        component={Link}
        to="/"
      />
      <Divider orientation="vertical" flexItem />

      <BottomNavigationAction
        label="Alerts"
        value="alerts"
        icon={<NotificationsSharpIcon />}
        component={Link}
        to="/alerts"
      />
      <Divider orientation="vertical" flexItem />

      <BottomNavigationAction
        label="Camera"
        value="photoUpload"
        icon={<CameraAltSharpIcon />}
        component={Link}
        to="/PhotoUpload"
      />
      <Divider orientation="vertical" flexItem />

    </BottomNavigation>
  );
}

export default BottomNav;