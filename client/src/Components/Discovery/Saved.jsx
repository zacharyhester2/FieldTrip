import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Card, Container, Row, Col, CardDeck, Jumbotron, Image } from 'react-bootstrap/';


const StyledCard = styled(Card)`
    transform-origin: top center;
    transition: transform 300ms;
    position: relative;
    z-index: 0;
    border-radius: 1rem;
    outline: none;
    margin-bottom: 30rem;
    object-fit: cover;
    :hover {
        transform: scale(1.1);
        z-index: 1;
        box-shadow: 0 0 0.7rem rgba(0, 0, 0, 0.9);
    }
    .news-img-top {
    width: 100%;
    height: 15vw;
    object-fit: cover;
    border-radius: 1rem 1rem 0 0;
}
`;

const Saved = ({ saved, font, getSaved, addResource }) => {

  const filteredSave = saved.filter(resource => resource.title !== 'trophy');
  const newSaved = Array.from(new Set(filteredSave.map(resource => resource.title))).map(title => filteredSave.find(resource => resource.title === title));
  console.log('ALL_SAVED', saved, 'new Saved', newSaved);
  useEffect(() => {
    getSaved();
  }, []);
  // console.log('SAVED', saved, 'FILTERED_SAVE', filteredSave, 'NEW_SAVED', newSaved);
  return (
    <div style={{ width: '50%', position: 'absolute', left: '25%', paddingBottom: '15rem' }}>
      {newSaved.map((resource, i) => (
        <StyledCard className="mb-4 mt-4 mr-4 ml-4"
        text="muted"
        bg="light"
        key={i * Math.random()}
        >
        <Image src={resource.image}
            key={i}
            className="news-img-top"
            >
            {/* {console.log(article)} */}
        </Image>
            <Card.Body>
                <Card.Title style={{ fontSize: font + 4, fontWeight: '900', color: 'rgb(0, 0, 0)' }}>{resource.title}</Card.Title>
                <Card.Text style={{ fontSize: font, color: 'rgb(92 92 92)', fontWeight: 'lighter' }}>{resource.description}</Card.Text>
                {
                  resource.type === 'article' ?
                (<p>Read Full Article
                    <a
                        href={resource.url}
                        target="_blank"
                        onClick={() => { addResource(resource, 'article'); }}
                    > Here</a></p>) :
                    (<p>Watch Full Video
                    <a
                        href={resource.url}
                        target="_blank"
                        onClick={() => { addResource(resource, 'documentary'); }}
                    > Here</a></p>)
                }
            </Card.Body>
        </StyledCard>
        ))}
    </div>
  );
};




export default Saved;