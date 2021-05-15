import React, { useState, useEffect } from 'react';
import WeeklyChallenge from './WeeklyChallenge/WeeklyChallenge.jsx'
import styled from 'styled-components';
import LandingHome from './LandingHome.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap/';

const HomeStyles = styled.div`
  padding-bottom: 5rem;
`;

const Home = ({user, getStamps, stamps, font}) => {

  return (
      <HomeStyles>
        <LandingHome font={font} />
        <Container className='home-landing-page'>
        {
        user ?
        <div>
          <WeeklyChallenge getStamps={getStamps} user={user} stamps={stamps} font={font} />
        </div>
        : null
        }
        </Container>
      </HomeStyles>
  );
};

export default Home;