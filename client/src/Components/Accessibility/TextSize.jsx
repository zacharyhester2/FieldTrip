import React from 'react';
import { ButtonGroup, IconButton, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'fixed',
    top: '20%',
    right: '1%',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const TextSize = ({ font, setFont }) => {
  const classes = useStyles();

  const handleIncrease = () => {
    setFont(font + 2);
  };

  const handleReset = () => {
    setFont(16);
  };

  const handleDecrease = () => {
    setFont(font - 2);
  };


  return (
    <div className={classes.root}>
      <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="text size changer buttons"
      >
        <Tooltip title='Increase font size' placement='right-start'>
          <IconButton aria-label='increase font size' style={{ fontSize: 'large', color: '#736bfb', backgroundColor: 'whitesmoke' }} onClick={handleIncrease}>
            <AddIcon/>
          </IconButton>
        </Tooltip>
        <Tooltip title='Reset font size' placement='right-start'>
          <IconButton aria-label='reset font size' style={{ fontSize: 'large', color: '#736bfb', backgroundColor: 'whitesmoke' }} onClick={handleReset}>
            <SettingsBackupRestoreIcon/>
          </IconButton>
        </Tooltip>
        <Tooltip title='Decrease font size' placement='right-start'>
          <IconButton aria-label='decrease font size' style={{ fontSize: 'large', color: '#736bfb', backgroundColor: 'whitesmoke' }} onClick={handleDecrease}>
            <RemoveIcon/>
          </IconButton>
        </Tooltip>
      </ButtonGroup>
    </div>
  );
}

export default TextSize;