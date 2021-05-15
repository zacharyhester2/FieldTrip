import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import RadioButtonUncheckedSharpIcon from '@material-ui/icons/RadioButtonUncheckedSharp';
import CheckCircleSharpIcon from '@material-ui/icons/CheckCircleSharp';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const IconButtons = ({ clicked, handleClick }) => {
  const classes = useStyles();

  const showCorrectIcon = () => {
    return (
      !clicked
      ? <RadioButtonUncheckedSharpIcon fontSize="large"/>
      : <CheckCircleSharpIcon fontSize="large"/>
    );
  };

  return (
    <div className={classes.root}>
      <IconButton onClick={handleClick}>
        {showCorrectIcon()}
      </IconButton>
    </div>
  );
}

export default IconButtons;