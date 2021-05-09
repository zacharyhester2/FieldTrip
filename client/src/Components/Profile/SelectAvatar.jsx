import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import AstroJelly from '../../assets/astrojelly.jpg';
import MammothBabe from '../../assets/mammothbabe.jpg';
import GoogleyCactus from '../../assets/googleycactus.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const StyledImage = styled.img`
  max-width: 100px;
  height: auto;
  border-radius: 50%;

`

const SelectAvatar = ({setAvatar}) => {
  const classes = useStyles();

  const chooseAvatar = (choice) => {
    setAvatar(choice)
  }

  return (

    <div className={classes.root}>
      {/* <div>
        <StyledImage alt="MammothBabe" src={MammothBabe} onClick={()=>{chooseAvatar(MammothBabe)}}/>
      </div>
      <div>
        <StyledImage alt="AstroJelly" src={AstroJelly} onClick={()=>{chooseAvatar(AstroJelly)}}/>
      </div>
      <div>
        <StyledImage alt="GoogleyCactus" src={GoogleyCactus} onClick={()=>{chooseAvatar(GoogleyCactus)}}/>
      </div> */}
      <Avatar alt="MammothBabe" src={MammothBabe} onClick={()=>{chooseAvatar(MammothBabe)}}/>
      <Avatar alt="AstroJelly" src={AstroJelly} onClick={()=>{chooseAvatar(AstroJelly)}}/>
      <Avatar alt="GoogleyCactus" src={GoogleyCactus} onClick={()=>{chooseAvatar(GoogleyCactus)}}/>
    </div>
  );
}

export default SelectAvatar;