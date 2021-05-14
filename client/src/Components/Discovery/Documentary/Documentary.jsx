import React, { useState, useEffect } from 'react';
import { Carousel, Row, Col, Jumbotron } from 'react-bootstrap/';
import axios from 'axios';
import styled from 'styled-components';
import YoutubeEmbed from './YoutubeEmbed.jsx';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp';
import IconButton from '@material-ui/core/IconButton';
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
`;

const useStyles = makeStyles((theme) => ({
  saved:{
    bottom: '7px',
    right: 0,
    position: 'absolute',
  },
}));

const Documentary = ({ addResource, discView, search, font, saved, addSaved }) => {
    const [docs, setDocs] = useState([]);
    const [iconColor, setIconColor] = useState('whitesmoke');
    const query = `${search}`;
    const classes = useStyles();

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
                                    <IconButton
                                        onClick={() => {
                                            addSaved(doc, 'documentary');
                                            setIconColor('rgb(251 58 139)');
                                        }}
                                        className={classes.saved}
                                    >
                                        <FavoriteSharpIcon style={{ color: iconColor }}/>
                                    </IconButton>
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