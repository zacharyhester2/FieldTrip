import React from 'react';
import Passport from './Passport.jsx';

const Profile = ({user, getStamps, stamps}) => {
  return (
    <>
    {getStamps()}
      <h1>Profile</h1>
      <h3>{user.name}</h3>
      <div>

      </div>
      <Passport stamps={stamps}/>
    </>
  );
};



export default Profile;