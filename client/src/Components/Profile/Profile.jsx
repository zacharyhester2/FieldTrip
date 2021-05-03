import React, {useEffect} from 'react';
import Passport from './Passport.jsx';
import profilePic from '../../assets/cape.jpg'
import styled from 'styled-components';

const ProfileStyles = styled.div`
  .profileInfo{
    margin: 0 auto;
    display: flex;
    flex-flow: column;
    max-width: 300px;
    text-align: center;
  }
`;
const Img = styled.div`
  img{
    border-radius: 50%;
    width: 200px;
    height: 200px;
    filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.6));
  }
`
const Profile = ({user, getStamps, stamps}) => {
  useEffect(() => {
    getStamps();
  }, []);
  return (
    <ProfileStyles>
      <div className="profileInfo">
        <h1>Profile</h1>
        <h3>{user.name}</h3>
        <Img>
          <img src={profilePic} alt="Avatar"/>
        </Img>
      </div>
      <Passport stamps={stamps}/>
    </ProfileStyles>
  );
};
export default Profile;