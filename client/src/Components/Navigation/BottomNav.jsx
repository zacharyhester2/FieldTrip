import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CameraAltSharpIcon from '@material-ui/icons/CameraAltSharp';
import EmojiPeopleSharpIcon from '@material-ui/icons/EmojiPeopleSharp';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: '0',
    width: '100%'
  },
});

const BottomNav = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('profile');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>

      <BottomNavigationAction
        label="Discover"
        value="discover"
        icon={<SearchSharpIcon />}
        // component={Link}
        // to="/discover"
      />

      <BottomNavigationAction
        label="Profile"
        value="profile"
        icon={<EmojiPeopleSharpIcon />}
        // component={Link}
        // to="/profile"
      />

      <BottomNavigationAction
        label="Alerts"
        value="alerts"
        icon={<NotificationsSharpIcon />}
        // component={Link}
        // to="/alerts"
      />

      <BottomNavigationAction
        label="Camera"
        value="camera"
        icon={<CameraAltSharpIcon />}
        // component={Link}
        // to="/camera"
      />

    </BottomNavigation>
  );
}

export default BottomNav;