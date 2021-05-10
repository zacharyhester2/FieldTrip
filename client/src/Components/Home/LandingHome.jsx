import React, { useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutFT from './AboutFT.jsx';

const LandingHomeStyled = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url('https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pdmet-julian-03-gloy_0.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=91f1263a708e7512549c8d165dc59c73');
  background-repeat: no-repeat;
  background-size: 100%;
  margin-bottom: 40rem;
`

const LandingHome = ({ font }) => {

  return (
    <LandingHomeStyled>
        <AboutFT style={{ fontSize: font + 26 }}/>
    </LandingHomeStyled>
  );
}

export default LandingHome;