import React, {useState, useEffect} from 'react';
import Passport from './Passport.jsx';
import styled from 'styled-components';
import DialogSelectAvatar from './DialogSelectAvatar.jsx';
import defaultAvatar from '../../assets/defaultAvatar.jpg';
import axios from 'axios';

const ProfileStyles = styled.div`
  padding-top: 3rem;
  .profileInfo{
    margin: 0 auto;
    display: flex;
    flex-flow: column;
    max-width: 300px;
    text-align: center;
  }
  .profileInfo h3{
    padding-top: 1.25rem;
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
const Profile = ({user, getStamps, stamps, getBadges, badges}) => {
  const [avatar, setAvatar] = useState(defaultAvatar)

  const getAvatar = () => {
    axios.get(`/avatar/${user.id}`)
    .then(({data}) => {
      setAvatar(data || defaultAvatar);
    })
  }

  const saveAvatar = (avatarToSave) => {
      axios.post(`/avatar/${user.id}`, {avatar: avatarToSave})
      .then(() => {
        getAvatar();
      })
      .catch();

  }


  useEffect(() => {
    getStamps();
    getBadges();
    getAvatar();
  }, []);
  return (
    <ProfileStyles>
      <div className="profileInfo">
        <Img>
          <img src={avatar} alt="Avatar"/>
        </Img>
        <h3>{user.name}</h3>
      </div>
      <DialogSelectAvatar setAvatar={setAvatar} saveAvatar={saveAvatar}/>
      <Passport stamps={stamps}/>
    </ProfileStyles>
  );
};
export default Profile;