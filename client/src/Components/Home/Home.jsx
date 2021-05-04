import React, { useState } from 'react';
import WeeklyChallenge from '../WeeklyChallenge/WeeklyChallenge.jsx'
import styled from 'styled-components';

const HomeStyles = styled.div`
  padding-bottom: 5rem;
`;

const Home = ({user, logout, getStamps}) => {
  return (
    <HomeStyles>
      {
      user ?
      <div>
        <WeeklyChallenge getStamps={getStamps} user={user}/>
      </div>
      : null
      }
    </HomeStyles>
  );
};

export default Home;