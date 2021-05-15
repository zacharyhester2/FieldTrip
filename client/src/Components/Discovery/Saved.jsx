import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Card, Container, Row, Col, CardDeck, Jumbotron, Image } from 'react-bootstrap/';

import IconButton from '@material-ui/core/IconButton';
import CloseSharpIcon from '@material-ui/icons/CloseSharp';


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
  .delete-btn-container {
    right: 0;
    bottom: 0;
    position: absolute;
  }
  .delete-btn:hover{
    transform: scale(1.3);
    color: rgb(251 58 139);
  }
  .full{
    bottom: 0;
    left: 0;
    position: relative;
  }
`;

const Saved = ({ saved, font, getSaved, addResource }) => {

  const filteredSave = saved.filter(resource => resource.title !== 'trophy');
  const newSaved = Array.from(new Set(filteredSave.map(resource => resource.title))).map(title => filteredSave.find(resource => resource.title === title));

  const deleteSaved = async (title) => {
    console.log(title);
    try{
      await axios.delete('/delete', { data: { title: title } })
      // if (res.data.success) {
      //   alert(res.data.message);
      // }
      getSaved();
    } catch(error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSaved();
  }, []);

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
        </Image>
            <Card.Body>
                <Card.Title style={{ fontSize: font + 4, fontWeight: '900', color: 'rgb(0, 0, 0)' }}>{resource.title}</Card.Title>
                <Card.Text style={{ fontSize: font, color: 'rgb(92 92 92)', fontWeight: 'lighter' }}>{resource.description}</Card.Text>
                {
                  resource.type === 'article' ?
                (<div className='full'>
                  <p style={{ fontSize: font - 3 }}>Read Full Article
                      <a
                          href={resource.url}
                          target="_blank"
                          onClick={() => { addResource(resource, 'article'); }}
                      > Here</a></p>
                    </div>) :
                    (<div className='full'>
                      <p style={{ fontSize: font - 3 }}>Watch Full Video
                      <a
                          href={resource.url}
                          target="_blank"
                          onClick={() => { addResource(resource, 'documentary'); }}
                      > Here</a></p>
                    </div>
                    )
                }
                <IconButton className='delete-btn-container' onClick={() => deleteSaved(resource.title)}>
                  <CloseSharpIcon className='delete-btn'/>
                </IconButton>
            </Card.Body>
        </StyledCard>
        ))}
    </div>
  );
};




export default Saved;