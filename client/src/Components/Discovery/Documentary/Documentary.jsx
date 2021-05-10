import React, { useState, useEffect } from 'react';
import { Carousel, Row, Col, Jumbotron } from 'react-bootstrap/';
import axios from 'axios';
import styled from 'styled-components';
import YoutubeEmbed from './YoutubeEmbed.jsx';

// const Img = styled.div`
//     height: 100vh;
//     width: 100%;
//     display: flex;
//     justify-content: center;
//   img{
//     border-radius: 45px;
//     border: 3px;
//     border-color: whitesmoke;
//     padding: 0 1rem;
//     height: auto;
//     width: auto;
//     margin: 0 auto;
//     margin-top: 30rem;
//     /* filter: grayscale(100%) */
//   }
//   img:hover {
//   transform: scaleX(-1);
// }
// `
const Caption= styled(Jumbotron)`
    background: rgba(25, 25, 25, 0.6) !important;
    height: auto;
    width: auto;
    margin: auto;
    border: 3px;
    border-color: whitesmoke;
    padding: 0 1rem;

`
const Documentary = ({ addResource, discView, search }) => {
    const [docs, setDocs] = useState([]);
    const query = `${search}`;
    const getDocs = async (query) => {
        await axios.get(`/youTube/${query}`)
        .then(({data}) => {
            setDocs(data);
        }).catch()
    }
    // const getDocs = (query) => {
    //     axios.get(`/youTube/${query}`)
    //     .then(({data}) => {
    //         setDocs(data);
    //     }).catch()
    // }
    useEffect(() => {
        getDocs(query);
    }, [discView])
    return (
        <div className="youtube">
            <Carousel fade style={{marginTop: '2rem' }}>
                {docs.map((doc, i) => (
                    <Carousel.Item className="mb-5 m5-5"
                    key={i} style={{ maxWidth: '60%', left: '20%', height: 'auto' }}
                    >
                            {/* <Img>
                                <img className="mx-auto"
                                src={doc.snippet.thumbnails.high.url}/>
                            </Img> */}
                            <YoutubeEmbed embedId={doc.id.videoId} kind='video'/>
                            <Caption>
                                    <h2>{doc.snippet.title}</h2>
                                    <p>Click
                                        <a
                                            href={`https://www.youtube.com/embed/${doc.id.videoId}`}
                                            target="_blank"
                                            onClick={() => { addResource(doc, 'documentary'); }}
                                        > Here</a>
                                        to watch on YouTube.
                                    </p>
                            </Caption>
                            {/* <Caption>
                                    <h2>{doc.snippet.title}</h2>
                                    <p>Watch Documentary
                                        <a
                                            href={`https://www.youtube.com/embed/${doc.id.videoId}`}
                                            target="_blank"
                                            onClick={() => { addResource(doc, 'documentary'); }}
                                        > Here</a>
                                    </p>
                            </Caption> */}
                    </Carousel.Item>
                    ))}
            </Carousel>
        </div>
    );
}
export default Documentary;