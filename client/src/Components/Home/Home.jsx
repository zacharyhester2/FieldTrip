import React, { useState } from 'react';
import WeeklyChallenge from '../WeeklyChallenge/WeeklyChallenge.jsx'

const Home = ({user, logout}) => {
  return (
    <>
    <h1>Welcome to Field Trip</h1>
    <WeeklyChallenge />
    {user ?
    <button onClick={logout}>LOG OUT</button>
    : null
    }
    </>
  );
};

export default Home;