import React, { useState, useEffect } from 'react';
import { Carousel, Container, Row, Col, Jumbotron } from 'react-bootstrap/';
import axios from 'axios';
import styled from 'styled-components';

const Img = styled.div`
  img{
    border-radius: 60px;
    border: 3px;
    border-color: whitesmoke;
    padding: 0 1rem;
    height: auto;
    width: auto;
    margin: 10px;
    /* filter: grayscale(100%) */

  }
  img:hover {
  transform: scaleX(-1);
}
`


const Caption = styled(Carousel.Caption)`
    background: rgba(25, 25, 25, 0.6) !important;
    height: auto;
    width: auto;
    margin: 10 px;
    border: 3px;
    border-radius: 60 px;
    border-color: whitesmoke;
    padding: 0 1rem;
`

const Documentary = () => {
    const [docs, setDocs] = useState([]);

    const search = 'Cosmos';
    
    const getDocs = (search) => {
        axios.get(`/youTube/${search}`)
        .then(({data}) => {
            setDocs(data);
        }).catch()
    }

    useEffect(() => {
        getDocs(search);
    }, [])

    return (
        <div>
            <Carousel fade>
                {docs.map((doc, i) => (
                    <Carousel.Item className="mb-5 m5-5"
                    key={i}>
                        <Img>
                            <img className="docs-img mx-auto"
                            src={doc.snippet.thumbnails.high.url}/>
                        </Img>
                        <Caption>
                                <h2>{doc.snippet.title}</h2>
                        </Caption>
                    </Carousel.Item>
                    ))}
            </Carousel>
        </div>
      );
}

export default Documentary;