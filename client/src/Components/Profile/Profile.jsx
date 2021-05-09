import React, {useState, useEffect} from 'react';
import Passport from './Passport.jsx';
import styled from 'styled-components';
import DialogSelectAvatar from './DialogSelectAvatar.jsx';
import defaultAvatar from '../../assets/defaultAvatar.jpg';

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
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.6));
  }
`
const Profile = ({user, getStamps, stamps}) => {
  const [avatar, setAvatar] = useState('')
  console.log('avatar from profile', avatar);

  useEffect(() => {
    getStamps();
  }, []);
  return (
    <ProfileStyles>
      <div className="profileInfo">
        <h1>Profile</h1>
        <h3>{user.name}</h3>
        <Img>
          <img src={!avatar ? defaultAvatar : avatar} alt="Avatar"/>
        </Img>
      </div>
      <DialogSelectAvatar setAvatar={setAvatar}/>
      <Passport stamps={stamps}/>
    </ProfileStyles>
  );
};
export default Profile;