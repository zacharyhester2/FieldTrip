import React, { useState } from 'react';
import WeeklyChallenge from '../WeeklyChallenge/WeeklyChallenge.jsx'
import styled from 'styled-components';
import LandingHome from './LandingHome.jsx';
import AboutFT from './AboutFT.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap/';


const HomeStyles = styled.div`
  padding-bottom: 5rem;
`;

const Home = ({user, logout, getStamps}) => {

  return (
      <HomeStyles>
        <LandingHome/>
        <Container className='home-landing-page'>
        {
        user ?
        <div>
          <WeeklyChallenge getStamps={getStamps} user={user}/>
        </div>
        : null
        }
        </Container>
      </HomeStyles>
  );
};

export default Home;