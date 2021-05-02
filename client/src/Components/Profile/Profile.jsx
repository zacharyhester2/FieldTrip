import React, {useEffect} from 'react';
import Passport from './Passport.jsx';
import profilePic from '../../assets/cape.jpg'
import styled from 'styled-components';

const Img = styled.div`
  img{
    border-radius: 50%;
    width: 200px;
    height: 200px;
  }
`



const Profile = ({user, getStamps, stamps}) => {

  useEffect(() => {
    getStamps();
  }, []);

  return (
    <>
      <h1>Profile</h1>
      <h3>{user.name}</h3>
      <Img>
        <img src={profilePic} alt="Avatar"/>
      </Img>
      <Passport stamps={stamps}/>
    </>
  );
};



export default Profile;