import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CategoryDialog from '../Navigation/CategoryDialog.jsx';
import logo from '../../assets/LogoNoBack.png';

// import galaxy from '../../themes/galaxy.png';
import galaxy from '../../themes/galaxy.jpg';
import earth from '../../themes/earth.png';
import dinos from '../../themes/dinos.jpg';


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
    // background: '#090b17',
    background: 'transparent',
  },
  spaceTheme: {
    backgroundImage: `url(${galaxy})`,
  },
  earthTheme: {
    backgroundImage: `url(${earth})`,
    width: '100%'
  },
  historyTheme: {
    backgroundImage: `url(${dinos})`,
  },
  headerDefault: {
    background: '#090b17',
  }
}));

const AppBarHeader = ({ user }) => {
  const classes = useStyles();
  const [theme, setTheme] = useState('headerDefault');

  const currClass = classes[`${theme}`];

  return (
    <div className={classes.root}>
      <header className={currClass} >
        <AppBar position="static" className={classes.bar}>
          <Toolbar>
            <a href='/'>
              <img className="logo" src={logo} alt="" width="250px"/>
            </a>
            <Typography variant="h6" className={classes.title}>
            </Typography>
            <>
              <CategoryDialog theme={theme} setTheme={setTheme} />
            </>
            <Button variant='text' color='inherit'>
              {user ? 'Logout' : 'Login'}
            </Button>
          </Toolbar>
        </AppBar>
      </header>
    </div>
  );
}


export default AppBarHeader;