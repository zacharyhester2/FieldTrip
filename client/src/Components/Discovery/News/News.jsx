import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Card, Row, Image } from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp';
import IconButton from '@material-ui/core/IconButton';
// hello
const StyledCard = styled(Card)`
    transform-origin: top center;
    transition: transform 300ms;
    position: relative;
    z-index: 0;
    border-radius: 1rem;
    outline: none;
    margin-bottom: 30rem;
    margin: 0 0 0 0;
    margin-right: 0px !important;
    margin-left: 0px !important;
    object-fit: cover;
    width: 30%;
    height: 100%;
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

const NewsContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 30rem;

`

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
  readFull:{
      bottom: 0,
      left: 0,
      position: 'relative',
  }
}));

const News = ({ addResource, discView, search, font, saved, addSaved }) => {
    const [news, setNews] = useState([]);
    // a state for each favorite button on each news card
    const [iconColor1, setIconColor1] = useState('rgb(80 80 80 / 46%)');
    const [iconColor2, setIconColor2] = useState('rgb(80 80 80 / 46%)');
    const [iconColor3, setIconColor3] = useState('rgb(80 80 80 / 46%)');
    const [iconColor4, setIconColor4] = useState('rgb(80 80 80 / 46%)');
    const [iconColor5, setIconColor5] = useState('rgb(80 80 80 / 46%)');
    const [iconColor6, setIconColor6] = useState('rgb(80 80 80 / 46%)');
    const classes = useStyles();
    const query = `${search}`;

    const getNews = (query) => {
        axios.get(`/newsQ/:${query}`)
        .then(({data}) => {
            setNews(data);
        }).catch()
    }

    // const getGeneral = () => {
    //     axios.get(`/ticker`)
    //     .then(({data}) => {
    //         setNews(data);
    //     }).catch()
    // }

    useEffect(() => {
        getNews(query);
    }, [discView]);

    // sets the 6 news objects to their own card
    // this was done so that when article is favorited, only that one article favorite button changes state
    const individualNewsCards = () => {
        if(!news.length) {
            getNews(query);
        } else {
            return (
<<<<<<< HEAD
        <div className="news-container">
            <Row md={4} style={{ justifyContent: 'center', position: 'center' }}>
=======
        // <div className="news-container">
            <NewsContainer>
>>>>>>> e314288 (deployed)

                <StyledCard
                        
                        text="muted"
                        bg="light"
                        key={1000 * Math.random()}
                    >
                        <Image src={news[0].urlToImage}
                            key={1000 * Math.random()}
                            className="news-img-top"
                            >
                        </Image>
                        <Card.Body>
                            <Card.Title style={{ fontSize: font + 4, color: '#070707', fontWeight: 'bolder' }}>{news[0].title}</Card.Title>
                            <Card.Text style={{ fontSize: font }}>{news[0].description}</Card.Text>
                            <div className={classes.readFull}>
                                <p style={{ fontSize: font - 3 }}>Read Full Article
                                    <a
                                        href={news[0].url}
                                        target="_blank"
                                        onClick={() => { addResource(news[0], 'article'); }}
                                    > Here</a>
                                </p>
                            </div>
                            <IconButton
                                onClick={() => {
                                    addSaved(news[0], 'article');
                                    setIconColor1('rgb(251 58 139)');
                                }}
                                className={classes.saved}
                            >
                                <FavoriteSharpIcon style={{ color: iconColor1 }}/>
                            </IconButton>
                        </Card.Body>
                    </StyledCard>

                    <StyledCard
                        className="mb-4 mt-4 mr-4 ml-4"
                        text="muted"
                        bg="light"
                        key={1000 * Math.random()}
                    >
                        <Image src={news[1].urlToImage}
                            key={1000 * Math.random()}
                            className="news-img-top"
                            >
                        </Image>
                        <Card.Body>
                            <Card.Title style={{ fontSize: font + 4, color: '#070707', fontWeight: 'bolder' }}>{news[1].title}</Card.Title>
                            <Card.Text style={{ fontSize: font }}>{news[1].description}</Card.Text>
                            <div className={classes.readFull}>
                                <p style={{ fontSize: font - 3 }}>Read Full Article
                                    <a
                                        href={news[1].url}
                                        target="_blank"
                                        onClick={() => { addResource(news[1], 'article'); }}
                                    > Here</a>
                                </p>
                            </div>
                            <IconButton
                                onClick={() => {
                                    addSaved(news[1], 'article');
                                    setIconColor2('rgb(251 58 139)');
                                }}
                                className={classes.saved}
                            >
                                <FavoriteSharpIcon style={{ color: iconColor2 }}/>
                            </IconButton>
                        </Card.Body>
                    </StyledCard>

                    <StyledCard
                        className="mb-4 mt-4 mr-4 ml-4"
                        text="muted"
                        bg="light"
                        key={1000 * Math.random()}
                    >
                        <Image src={news[2].urlToImage}
                            key={1000 * Math.random()}
                            className="news-img-top"
                            >
                        </Image>
                        <Card.Body>
                            <Card.Title style={{ fontSize: font + 4, color: '#070707', fontWeight: 'bolder' }}>{news[2].title}</Card.Title>
                            <Card.Text style={{ fontSize: font }}>{news[2].description}</Card.Text>
                            <div className={classes.readFull}>
                                <p style={{ fontSize: font - 3 }}>Read Full Article
                                    <a
                                        href={news[2].url}
                                        target="_blank"
                                        onClick={() => { addResource(news[2], 'article'); }}
                                    > Here</a>
                                </p>
                            </div>
                            <IconButton
                                onClick={() => {
                                    addSaved(news[2], 'article');
                                    setIconColor3('rgb(251 58 139)');
                                }}
                                className={classes.saved}
                            >
                                <FavoriteSharpIcon style={{ color: iconColor3 }}/>
                            </IconButton>
                        </Card.Body>
                    </StyledCard>

                    <StyledCard
                        className="mb-4 mt-4 mr-4 ml-4"
                        text="muted"
                        bg="light"
                        key={1000 * Math.random()}
                    >
                        <Image src={news[3].urlToImage}
                            key={1000 * Math.random()}
                            className="news-img-top"
                            >
                        </Image>
                        <Card.Body>
                            <Card.Title style={{ fontSize: font + 4, color: '#070707', fontWeight: 'bolder' }}>{news[3].title}</Card.Title>
                            <Card.Text style={{ fontSize: font }}>{news[3].description}</Card.Text>
                            <div className={classes.readFull}>
                                <p style={{ fontSize: font - 3 }}>Read Full Article
                                    <a
                                        href={news[3].url}
                                        target="_blank"
                                        onClick={() => { addResource(news[3], 'article'); }}
                                    > Here</a>
                                </p>
                            </div>
                            <IconButton
                                onClick={() => {
                                    addSaved(news[3], 'article');
                                    setIconColor4('rgb(251 58 139)');
                                }}
                                className={classes.saved}
                            >
                                <FavoriteSharpIcon style={{ color: iconColor4 }}/>
                            </IconButton>
                        </Card.Body>
                    </StyledCard>

                    <StyledCard
                        className="mb-4 mt-4 mr-4 ml-4"
                        text="muted"
                        bg="light"
                        key={1000 * Math.random()}
                    >
                        <Image src={news[4].urlToImage}
                            key={1000 * Math.random()}
                            className="news-img-top"
                            >
                        </Image>
                        <Card.Body>
                            <Card.Title style={{ fontSize: font + 4, color: '#070707', fontWeight: 'bolder' }}>{news[4].title}</Card.Title>
                            <Card.Text style={{ fontSize: font }}>{news[4].description}</Card.Text>
                            <div className={classes.readFull}>
                                <p style={{ fontSize: font - 3 }}>Read Full Article
                                    <a
                                        href={news[4].url}
                                        target="_blank"
                                        onClick={() => { addResource(news[4], 'article'); }}
                                    > Here</a>
                                </p>
                            </div>
                            <IconButton
                                onClick={() => {
                                    addSaved(news[4], 'article');
                                    setIconColor5('rgb(251 58 139)');
                                }}
                                className={classes.saved}
                            >
                                <FavoriteSharpIcon style={{ color: iconColor5 }}/>
                            </IconButton>
                        </Card.Body>
                    </StyledCard>

                    <StyledCard
                        className="mb-4 mt-4 mr-4 ml-4"
                        text="muted"
                        bg="light"
                        key={1000 * Math.random()}
                    >
                        <Image src={news[5].urlToImage}
                            key={1000 * Math.random()}
                            className="news-img-top"
                            >
                        </Image>
                        <Card.Body>
                            <Card.Title style={{ fontSize: font + 4, color: '#070707', fontWeight: 'bolder' }}>{news[5].title}</Card.Title>
                            <Card.Text style={{ fontSize: font }}>{news[5].description}</Card.Text>
                            <div className={classes.readFull}>
                                <p style={{ fontSize: font - 3 }}>Read Full Article
                                    <a
                                        href={news[5].url}
                                        target="_blank"
                                        onClick={() => { addResource(news[5], 'article'); }}
                                    > Here</a>
                                </p>
                            </div>
                            <IconButton
                                onClick={() => {
                                    addSaved(news[5], 'article');
                                    setIconColor6('rgb(251 58 139)');
                                }}
                                className={classes.saved}
                            >
                                <FavoriteSharpIcon style={{ color: iconColor6 }}/>
                            </IconButton>
                        </Card.Body>
                    </StyledCard>
            </NewsContainer>
        // </div>
     );
        }
    }

    console.log('third', news);
    return (
        individualNewsCards() || null
    );
    // return (
    //     <div className="news-container">
    //         <Row md={4} style={{ position: 'center' }}>
    //             {news.map((article, i) => (
    //                 <StyledCard className="mb-4 mt-4 mr-4 ml-4"
    //                 text="muted"
    //                 bg="light"
    //                 key={i * Math.random()}
    //                 >
    //                 <Image src={article.urlToImage}
    //                     key={i}
    //                     className="news-img-top"
    //                     >
    //                     {/* {console.log(article)} */}
    //                 </Image>
    //                     <Card.Body>
    //                         <Card.Title style={{ fontSize: font + 4, fontWeight: '900', color: 'rgb(0, 0, 0)' }}>{article.title}</Card.Title>
    //                         <Card.Text style={{ fontSize: font, color: 'rgb(92 92 92)', fontWeight: 'lighter' }}>{article.description}</Card.Text>
    //                         <p>Read Full Article
    //                             <a
    //                                 href={article.url}
    //                                 target="_blank"
    //                                 onClick={() => { addResource(article, 'article'); }}
    //                             > Here</a></p>
    //                             {/* <IconContext.Provider value={buttonColor.clicked}> */}
    //                                 <IconButton
    //                                     onClick={() => {
    //                                         addSaved(article, 'article');
    //                                         setIconColor('rgb(251 58 139)');
    //                                     }}
    //                                     className={classes.saved}
    //                                     >
    //                                     <FavoriteSharpIcon style={{ color: iconColor }}/>
    //                                 </IconButton>

    //                                 {/* {Btn()} */}
    //                             {/* </IconContext.Provider> */}
    //                     </Card.Body>
    //                 </StyledCard>
    //             ))}
    //         </Row>
    //     </div>
    //  );
    }

export default News;
