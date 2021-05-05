import React, { useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutFT from './AboutFT.jsx';

const LandingHomeStyled = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url('https://images.unsplash.com/photo-1605666807892-8c11d020bede?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80');
  background-repeat: 'no-repeat' !important;
`

const LandingHome = () => {

  return (
    <LandingHomeStyled>
        <AboutFT/>
    </LandingHomeStyled>
  );
}

export default LandingHome;