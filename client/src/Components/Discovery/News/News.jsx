import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Card, Container, Row, Col, CardDeck, Jumbotron, Image } from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeStyles } from '@material-ui/core/styles';
// import { Grid, Card, CardMedia, CardContent, CardActions, CardActionArea, Button, Typography } from '@material-ui/core'
import FavoriteBorderSharpIcon from '@material-ui/icons/FavoriteBorderSharp';
import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp';
import IconButton from '@material-ui/core/IconButton';

// const StyledCard = styled.div`
//     max-width: 15rem;
//     transform-origin: top center;
//     transition: transform 300ms;
//     position: relative;
//     z-index: 0;
//     border-radius: 1rem;
//     outline: none;
//     margin-bottom: 30rem;
//     object-fit: cover;
//     :hover {
//         transform: scale(1.1);
//         z-index: 1;
//         box-shadow: 0 0 0.7rem rgba(0, 0, 0, 0.9);
//     }
//     .card-top img{
//     width: 100%;
//     height: 15vw;
//     object-fit: cover;
//     border-radius: 1rem 1rem 0 0;
//     max-width: 2rem;
// }
// `;

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


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  control: {
    padding: theme.spacing(2),
  },
  saved:{
    bottom: 0,
    right: 0,
    position: 'absolute',
  },

}));

    // const buttonColor = {
    //     unclicked: 'rgb(9, 11, 23)',
    //     clicked: 'rgb(251 58 139)'
    // }
    // const IconContext = React.createContext(buttonColor.unclicked)

const News = ({ addResource, discView, search, font, saved, addSaved }) => {
    const [news, setNews] = useState([]);
    const [iconColor, setIconColor] = useState('rgb(80 80 80 / 46%)');

    const classes = useStyles();
    const query = `${search}`;

    const getNews = (query) => {
        axios.get(`/newsQ/:${query}`)
        .then(({data}) => {
            setNews(data);
        }).catch()
    }

    // const Btn = () => {
    //     const theme = useContext(IconContext);
    //     return (
    //         <IconButton
    //             onClick={() => {
    //                 addSaved(article, 'article');
    //                 setIconColor('rgb(251 58 139)')
    //             }}
    //             // className={classes.saved}
    //         >
    //             <FavoriteSharpIcon style={{ color: theme }} />
    //         </IconButton>
    //     );
    // };



    // const handleSaveClick = () => {
    //     setSaveClicked(true);
    //     addSaved();
    // }

    useEffect(() => {
        getNews(query);
    }, [discView])

    return (
        <div className="news-container">
            <Row md={4} style={{ position: 'center' }}>
                {news.map((article, i) => (
                    <StyledCard className="mb-4 mt-4 mr-4 ml-4"
                    text="muted"
                    bg="light"
                    key={i * Math.random()}
                    >
                    <Image src={article.urlToImage}
                        key={i}
                        className="news-img-top"
                        >
                        {/* {console.log(article)} */}
                    </Image>
                        <Card.Body>
                            <Card.Title style={{ fontSize: font + 4, fontWeight: '900', color: 'rgb(0, 0, 0)' }}>{article.title}</Card.Title>
                            <Card.Text style={{ fontSize: font, color: 'rgb(92 92 92)', fontWeight: 'lighter' }}>{article.description}</Card.Text>
                            <p>Read Full Article
                                <a
                                    href={article.url}
                                    target="_blank"
                                    onClick={() => { addResource(article, 'article'); }}
                                > Here</a></p>
                                {/* <IconContext.Provider value={buttonColor.clicked}> */}
                                    <IconButton
                                        onClick={() => {
                                            addSaved(article, 'article');
                                            setIconColor('rgb(251 58 139)');
                                        }}
                                        className={classes.saved}
                                        >
                                        <FavoriteSharpIcon style={{ color: iconColor }}/>
                                    </IconButton>

                                    {/* {Btn()} */}
                                {/* </IconContext.Provider> */}
                        </Card.Body>
                    </StyledCard>
                ))}
            </Row>
        </div>
     );
}

export default News;