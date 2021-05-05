import React, { useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const LandingStyled = styled.div`
  height: 100vh;
  width: 100%;
  h1{
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const LandingDisc = () => {






  return (

    <LandingStyled>
      <h1>Choose Your Journey</h1>
    </LandingStyled>
  );
}

export default LandingDisc;