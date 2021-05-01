import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';

import AccountBalanceSharpIcon from '@material-ui/icons/AccountBalanceSharp';
import EcoSharpIcon from '@material-ui/icons/EcoSharp';
import FlareSharpIcon from '@material-ui/icons/FlareSharp';
import AllInclusiveSharpIcon from '@material-ui/icons/AllInclusiveSharp';


const categories = [
  { icon: <FlareSharpIcon />, name: 'Outer Space', theme: 'spaceTheme' },
  { icon: <EcoSharpIcon />, name: 'Planet Earth', theme: 'earthTheme' },
  { icon: <AccountBalanceSharpIcon />, name: 'Natural History', theme: 'historyTheme' },
  { icon: <AllInclusiveSharpIcon />, name: 'General Science', theme: 'headerDefault' }
];

const useStyles = makeStyles({
  avatar: {
    backgroundColor: 'rgba(114, 107, 251, 0.851)',
    color: 'whitesmoke',
  },
});

const CategoryDialogBuilder = (props) => {
  const classes = useStyles();
  const { onClose, selectedValue, open, selectedTheme, discView } = props;

  const handleClose = () => {
    onClose(selectedValue, selectedTheme, discView);
  };

  const handleListItemClick = (value, theme) => {
    onClose(value, theme);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Choose a category!</DialogTitle>
      <List>
        {categories.map((category) => (
          <ListItem button onClick={() => handleListItemClick(category.name, category.theme)} key={category.name}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                {category.icon}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={category.name} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

CategoryDialogBuilder.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
  selectedTheme: PropTypes.string.isRequired,
  discView: PropTypes.string.isRequired,
};

const CategoryDialog = ({ theme, setTheme, discView, setDiscView }) => {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('science');
  const [selectedTheme, setSelectedTheme] = useState('headerDefault');

  useEffect(() => {
    setTheme(selectedTheme);
  }, [selectedValue]);

  useEffect(() => {
    setDiscView(selectedValue);
  }, [selectedTheme]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value, theme) => {
    // console.log('VALUE_SECOND', value)
    setOpen(false);
    setSelectedValue(value);
    setSelectedTheme(theme);
  };

  return (
    <>
      {/* <Typography variant="subtitle1">Selected: {discView}</Typography> */}
      <br />
      <Button variant="text" color="secondary" onClick={handleClickOpen} style={{ color: 'whitesmoke' }}>
        Categories
      </Button>
      <CategoryDialogBuilder selectedValue={selectedValue} open={open} onClose={handleClose} theme={selectedTheme} discView={discView} />
    </>
  );
}

export default CategoryDialog;