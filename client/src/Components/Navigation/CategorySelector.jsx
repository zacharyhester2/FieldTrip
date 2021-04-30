import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import AccountBalanceSharpIcon from '@material-ui/icons/AccountBalanceSharp';
import EcoSharpIcon from '@material-ui/icons/EcoSharp';
import FlareSharpIcon from '@material-ui/icons/FlareSharp';

import axios from 'axios';


import Alerts from '../Alerts/Alerts.jsx';


const useStyles = makeStyles((theme) => ({
  speedDial: {
    position: 'absolute',
    bottom: theme.spacing(2),
    left: theme.spacing(2),
    marginLeft: '33%',
    marginBottom: '3%',
  },
}));

const actions = [
  { icon: <FlareSharpIcon />, name: 'Outer Space' },
  { icon: <EcoSharpIcon />, name: 'Planet Earth' },
  { icon: <AccountBalanceSharpIcon />, name: 'Natural History' },
];



const CategorySelector = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [hidden, setHidden] = React.useState(false);
  const [view, setView] = React.useState('');

  const handleVisibility = () => {
    setHidden((prevHidden) => !prevHidden);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const changeView = () => {
  //   if ()
  // }

  const handleClick = (name) => {
    // e.preventDefault();
    if (name === 'Outer Space') {
      // return (<Space />);
      console.log('space');
      setView('space');
    } else if (name === 'Planet Earth') {
      // return (<Earth />);
      console.log('earth');
      setView('earth');
    } else if (name === 'Natural History') {
      // return (<History />);
      console.log('history');
      setView('history');
    } else {
      return (<><h1>DISCOVERY</h1></>)
    }
  };



  return (
    <>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="Choose a category!"
        className={classes.speedDial}
        hidden={hidden}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        onFocus={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={() => {
              console.log(action.name)
              handleClick(action.name);
            }}
          />
        ))}
      </SpeedDial>
      </>
  );
}

export default CategorySelector;