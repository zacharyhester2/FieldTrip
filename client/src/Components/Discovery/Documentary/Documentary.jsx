import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap/';
import axios from 'axios';
import styled from 'styled-components';
import { Button } from '@material-ui/core'

const Caption = styled(Carousel.Caption)`
    background: rgba(25, 25, 25, 0.6) !important;
    width: fit-content;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex !important;
`
const Img =  styled.div`
    justify-content: center !important;
    border-radius: 0.25rem !important;
`

const Documentary = ({addResource}) => {
    const [docs, setDocs] = useState([]);

    const search = 'microcosmos';

    const getDocs = (search) => {
        axios.get(`/youTube/:${search}`)
        .then(({data}) => {
            setDocs(data);
        }).catch()
    }

    useEffect(() => {
        getDocs(search);
    }, [])

    return (
        <div>
            <h1>Docs</h1>
                {/* {console.log(docs, 'docs')} */}
            <Carousel>
            {docs.map((doc, i) => (
            <Carousel.Item key={i}>
                <Img>
                    <img className="docs-img" src={doc.snippet.thumbnails.high.url}/>
                </Img>
                <Caption>
                    <div id="content">
                        <h3>{doc.snippet.title}</h3>
                        <p>{doc.snippet.description}</p>
                        <Button variant="contained" onClick={() => { addResource(doc.snippet); }}>Resource Me!</Button>
                    </div>
                </Caption>
            </Carousel.Item>
            ))}
            </Carousel>
        </div>
      );
}

export default Documentary;