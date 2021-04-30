import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap/';
import axios from 'axios';

const Documentary = () => {
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
                {console.log(docs, 'docs')}
            <Carousel>
            {docs.map((doc, i) => (
            <Carousel.Item key={i}>
                <img className="docs-img" src={doc.snippet.thumbnails.high.url}/>
                <Carousel.Caption>
                    <h3>{doc.snippet.title}</h3>
                    <p>{doc.snippet.description}</p>
                </Carousel.Caption>
            </Carousel.Item>
            ))}
            </Carousel>
        </div>
      );
}

export default Documentary;