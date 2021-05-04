import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CameraAltSharpIcon from '@material-ui/icons/CameraAltSharp';
import EmojiPeopleSharpIcon from '@material-ui/icons/EmojiPeopleSharp';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import Divider from '@material-ui/core/Divider';



const bottomNavTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#ffffff'
            // main: 'rgb(9,11,23)'
        },
        text: {
            // secondary: 'rgb(9,11,23)'
            // secondary: '#ffffff'
            secondary: 'rgba(115,107,251,0.65)'
        }
    }
})

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: '0',
    width: '100%',
    'z-index': '100',
    backgroundColor: 'rgb(9,11,23)',
    // backgroundColor: 'rgb(115,107,251, 0.65)',
  },
  vertDiv: {
    backgroundColor: 'rgba(115,107,251,0.65)'
    // backgroundColor: 'rgb(9, 11, 23)',
    // backgroundColor: '#ffffff',
  }
});

const BottomNav = () => {
  const classes = useStyles();
  const [value, setValue] = useState('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={bottomNavTheme}>
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>

      <Divider className={classes.vertDiv} orientation="vertical" flexItem />

      <BottomNavigationAction
        label="Discovery"
        value="discovery"
        icon={<SearchSharpIcon />}
        component={Link}
        to="/discovery"
      />
      <Divider className={classes.vertDiv} orientation="vertical" flexItem />

      <BottomNavigationAction
        label="Profile"
        value="profile"
        icon={<EmojiPeopleSharpIcon />}
        component={Link}
        to="/profile"
      />
      <Divider className={classes.vertDiv} orientation="vertical" flexItem />

      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<HomeSharpIcon />}
        component={Link}
        to="/"
      />
      <Divider className={classes.vertDiv} orientation="vertical" flexItem />

      <BottomNavigationAction
        label="Alerts"
        value="alerts"
        icon={<NotificationsSharpIcon />}
        component={Link}
        to="/alerts"
      />
      <Divider className={classes.vertDiv} orientation="vertical" flexItem />

      {/* <BottomNavigationAction
        label="Camera"
        value="photoUpload"
        icon={<CameraAltSharpIcon />}
        component={Link}
        to="/PhotoUpload"
      /> */}
      {/* <Divider className={classes.vertDiv} orientation="vertical" flexItem /> */}

    </BottomNavigation>
    </ThemeProvider>
  );
}

export default BottomNav;