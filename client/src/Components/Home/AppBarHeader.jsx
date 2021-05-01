import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CategoryDialog from '../Navigation/CategoryDialog.jsx';
import logo from '../../assets/LogoNoBack.png';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  bar: {
    background: '#090b17',
  }
}));

const AppBarHeader = ({ user }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <a href='/'>
            <img className="logo" src={logo} alt="" width="250px"/>
          </a>
          <Typography variant="h6" className={classes.title}>
          </Typography>
          <>
            <CategoryDialog/>
          </>
          <Button variant='text' color='inherit'>
            {user ? 'Logout' : 'Login'}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default AppBarHeader;