import React, { useState, useEffect } from 'react';
import { Carousel, Row, Col, Jumbotron } from 'react-bootstrap/';
import axios from 'axios';
import styled from 'styled-components';

const Img = styled.div`

    width: 100%;
    display: flex;
    justify-content: center;

  img{
    border-radius: 45px;
    border: 3px;
    border-color: whitesmoke;
    padding: 0 1rem;
    height: auto;
    width: auto;
    margin: 0 auto;
    /* filter: grayscale(100%) */

  }
  img:hover {
  transform: scaleX(-1);
}
`


const Caption= styled(Jumbotron)`
    background: rgba(25, 25, 25, 0.6) !important;
    height: auto;
    width: auto;
    margin: auto;
    border: 3px;
    border-radius: 60 px;
    border-color: whitesmoke;
    padding: 0 1rem;
`


const Documentary = ({ addResource, discView, search }) => {
    const [docs, setDocs] = useState([]);

    const query = `${search}`;


    const getDocs = (query) => {
        axios.get(`/youTube/${query}`)
        .then(({data}) => {
            setDocs(data);
        }).catch()
    }

    useEffect(() => {
        getDocs(query);
    }, [discView])

    return (
        <div>

            <Carousel fade>
                {docs.map((doc, i) => (
                    <Carousel.Item className="mb-5 m5-5"
                    key={i}>
                            <Img>
                                <img className="mx-auto"
                                src={doc.snippet.thumbnails.high.url}/>
                            </Img>
                            <Caption>
                                    <h2>{doc.snippet.title}</h2>
                                    <p>Watch Documentary
                                        <a
                                            href={`https://www.youtube.com/embed/${doc.id.videoId}`}
                                            target="_blank"
                                            onClick={() => { addResource(doc, 'youTube'); }}
                                        > Here</a>
                                    </p>
                            </Caption>
                    </Carousel.Item>
                    ))}
            </Carousel>
        </div>
    );
}

export default Documentary;