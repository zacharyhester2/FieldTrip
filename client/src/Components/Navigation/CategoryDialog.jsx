import React from 'react';
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


const categories = [
  { icon: <FlareSharpIcon />, name: 'Outer Space' },
  { icon: <EcoSharpIcon />, name: 'Planet Earth' },
  { icon: <AccountBalanceSharpIcon />, name: 'Natural History' },
];

const useStyles = makeStyles({
  avatar: {
    backgroundColor: '#736bfb',
    color: 'whitesmoke',
  },
});

const CategoryDialogBuilder = (props) => {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Choose a category!</DialogTitle>
      <List>
        {categories.map((category) => (
          <ListItem button onClick={() => handleListItemClick(category.name)} key={category.name}>
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
};

const CategoryDialog = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(categories[0].name);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <>
      {/* <Typography variant="subtitle1">Selected: {selectedValue}</Typography> */}
      <br />
      <Button variant="text" color="secondary" onClick={handleClickOpen} style={{ color: 'whitesmoke' }}>
        Categories
      </Button>
      <CategoryDialogBuilder selectedValue={selectedValue} open={open} onClose={handleClose} />
    </>
  );
}

export default CategoryDialog;