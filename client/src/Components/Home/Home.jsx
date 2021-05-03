import React, { useState } from 'react';
import WeeklyChallenge from '../WeeklyChallenge/WeeklyChallenge.jsx'

const Home = ({user, logout}) => {
  return (
    <div>
      <h2>Field Trip</h2>
      {user ?
      <div>
        <WeeklyChallenge />
        {/* <button onClick={logout}>LOG OUT</button> */}
      </div>
      : null
      }
    </div>
  );
};

export default Home;