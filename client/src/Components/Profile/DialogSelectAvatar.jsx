import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AstroJelly from '../../assets/astrojelly.jpg';
import MammothBabe from '../../assets/mammothbabe.jpg';
import GoogleyCactus from '../../assets/googleycactus.jpg';
import FlyingCape from '../../assets/cape.jpg';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  button: {
    display:"flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

 const DialogSelectAvatar = ({avatar, setAvatar}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAvatar(String(event.target.value) || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen} style={{margin: '15px auto', display: "flex"}}>Choose an Avatar</Button>
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-dialog-native">Choose an Avatar</InputLabel>
              <Select
                native
                value={avatar}
                onChange={handleChange}
                input={<Input id="demo-dialog-native" />}
              >
                <option aria-label="None" value="" />
                <option value={AstroJelly}>Astro Jelly</option>
                <option value={MammothBabe}>Mammoth Babe</option>
                <option value={GoogleyCactus}>Googley Cactus</option>
                <option value={FlyingCape}>Flying Cape</option>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogSelectAvatar;