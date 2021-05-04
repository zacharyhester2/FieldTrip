import React, { useState } from 'react';
import { Carousel, Container, Row, Col, Jumbotron } from 'react-bootstrap/';
import News from './News/News.jsx';
import Documentary from './Documentary/Documentary.jsx';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingDisc from './Documentary/LandingDisc.jsx'



const Discovery = ({ addResource, discView, search }) => {


  const query = '';


  return (
    <Container>
      <LandingDisc discView={discView}/>
      <News addResource={addResource} discView={discView}/>
      {/* <Documentary addResource={addResource} discView={discView}/> */}
    </Container>
  );
}

export default Discovery;