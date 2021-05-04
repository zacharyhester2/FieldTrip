import React, { useState } from 'react';
import { Carousel, Container, Row, Col, Jumbotron } from 'react-bootstrap/';
import Podcast from './Podcast/Podcast.jsx';
import News from './News/News.jsx';
import Documentary from './Documentary/Documentary.jsx';
import styled from 'styled-components';

const StyledTitle = styled.h3`
font-family: 'Raleway', sans-serif;
`

const Discovery = ({ addResource, discView, search }) => {


  const query = '';


  return (
    <Container>
      <StyledTitle>Articles</StyledTitle>
      <News addResource={addResource} discView={discView} search={search} />
      <StyledTitle>Documentaries</StyledTitle>
      <Documentary addResource={addResource} discView={discView} search={search} />
    </Container>
  );
}

export default Discovery;