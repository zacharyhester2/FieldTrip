import React, { useState } from 'react';
import WeeklyChallenge from '../WeeklyChallenge/WeeklyChallenge.jsx'

const Home = ({user, logout}) => {
  return (
    <>
    <h1>Welcome to Field Trip</h1>
    {user ?
    <div>
      <WeeklyChallenge />
      {/* <button onClick={logout}>LOG OUT</button> */}
    </div>
    : null
    }
    </>
  );
};

export default Home;