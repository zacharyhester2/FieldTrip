import React, {useState, useEffect} from 'react';
import Passport from './Passport.jsx';
import profilePic from '../../assets/cape.jpg'
import styled from 'styled-components';
import SelectAvatar from './SelectAvatar.jsx'

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
    max-width: 100px;
    height: auto;
    border-radius: 50%;
    object-fit: cover;
    filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.6));
  }
`
const Profile = ({user, getStamps, stamps}) => {
  const [avatar, setAvatar] = useState()

  useEffect(() => {
    getStamps();
  }, []);
  return (
    <ProfileStyles>
      <div className="profileInfo">
        <h1>Profile</h1>
        <h3>{user.name}</h3>
        <Img>
          <img src={avatar} alt="Avatar"/>
        </Img>
      </div>
      <SelectAvatar setAvatar={setAvatar}/>
      <Passport stamps={stamps}/>
    </ProfileStyles>
  );
};
export default Profile;