import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap/';
import News from './News/News.jsx';
import Documentary from './Documentary/Documentary.jsx';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResourceTabs from './ResourceTabs.jsx';
import Saved from './Saved.jsx';

const StyledTitle = styled.h3`
font-family: 'Raleway', sans-serif;
`

const Discovery = ({ addResource, discView, search, font, resourceValue, handleResourceChange, saved, addSaved, getSaved }) => {


  const query = '';


  return (
    <Fragment>
      
        <ResourceTabs resourceValue={resourceValue} handleResourceChange={handleResourceChange} />
      
      {
        resourceValue === 0
        ? (
        <Container id='news-container'>
          <News addResource={addResource} discView={discView} search={search} font={font} saved={saved} addSaved={addSaved} />
        </Container>
        )
        : resourceValue === 1
          ? <Saved saved={saved} font={font} getSaved={getSaved} addResource={addResource} />
          : resourceValue === 2
            ? <Documentary addResource={addResource} discView={discView} search={search} saved={saved} addSaved={addSaved} font={font} />
            : null
              }
    </Fragment>
  );
}

export default Discovery;