import React, { useState } from 'react';
import { Carousel, Container, Row, Col, Jumbotron } from 'react-bootstrap/';
import News from './News/News.jsx';
import Documentary from './Documentary/Documentary.jsx';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingDisc from './Documentary/LandingDisc.jsx'

const StyledTitle = styled.h3`
font-family: 'Raleway', sans-serif;
`

const Discovery = ({ addResource, discView, search }) => {


  const query = '';


  return (
    <>
    <LandingDisc discView={discView}/>
    <Container className='news-cards'>
      <StyledTitle>Articles</StyledTitle>
      <News addResource={addResource} discView={discView} search={search} />
    </Container>
    <Container>
      <StyledTitle>Documentaries</StyledTitle>
      <Documentary addResource={addResource} discView={discView} search={search} />
    </Container>
    </>
  );
}

export default Discovery;