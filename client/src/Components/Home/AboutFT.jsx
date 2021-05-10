import React, { useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap/';

const LandingInspo = styled.div`
  height: 100vh;
  width: 100%;
  p{
    justify-content: center;
    position: absolute;
    top: 27%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`



const AboutFT = ({ font }) => {


  return (

    <LandingInspo>
    <p style={{ fontSize: font }}>INSPIRATIONAL QUOTE
    <br></br>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
    </LandingInspo>
  );
}

export default AboutFT;