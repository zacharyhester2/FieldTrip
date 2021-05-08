import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
// import { Card, Container, Row, Col, CardDeck, Jumbotron, Image } from 'react-bootstrap/';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardMedia, CardContent, CardActions, CardActionArea, Button, Typography } from '@material-ui/core'

const StyledCard = styled.div`
    max-width: 15rem;
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
    .card-top img{
    /* width: 100%; */
    /* height: 15vw;
    object-fit: cover; */
    border-radius: 1rem 1rem 0 0;
    /* max-width: 2rem; */
}
`;

// const StyledCard = styled(Card)`
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
//     .news-img-top {
//     width: 100%;
//     height: 15vw;
//     object-fit: cover;
//     border-radius: 1rem 1rem 0 0;
// }
// `;


// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 16,
//   },
//   control: {
//     padding: theme.spacing(2),
//   },
//   newsCard:{
//       maxWidth: 345,
//   },

// }));

const News = ({ addResource, discView, search, font }) => {
    const [news, setNews] = useState([]);
    // const classes = useStyles();
    const query = `${search}`;

    const getNews = (query) => {
        axios.get(`/newsQ/:${query}`)
        .then(({data}) => {
            setNews(data);
        }).catch()
    }

    useEffect(() => {
        getNews(query);
    }, [discView])

    return (
        <div className='news-container'>
            {/* <div className='news-container-row'> */}
                {news.map((article, i) => (
                    // <div className='news-card-container'>
                        <StyledCard>
                            <div className='card-top'>
                                <img
                                    src={article.urlToImage}
                                    alt={article.title}
                                />
                            </div>
                            <div className='card-middle'>
                                <h2 style={{ fontSize: font + 5 }}>
                                    {article.title}
                                </h2>
                                <p style={{ fontSize: font }}>
                                    {article.description}
                                </p>
                            </div>
                            <div className='card-bottom'>
                                <div className='btn-left'>
                                    <Button size="small" color="primary">
                                        Full Article
                                    </Button>
                                </div>
                                <div className='btn-right'>
                                    <Button size="small" color="primary">
                                        Read Later
                                    </Button>
                                </div>
                            </div>
                        </StyledCard>
                    // </div>
                ))}
            {/* </div> */}
        </div>
    );
    //     <Grid container className={classes.root} spacing={4}>
    //         <Grid item xs={12}>
    //             <Grid container justify="center">
    //                 {news.map((article, i) => (
    //                     <Grid key={(i * Math.random())} item>
    //                         <Card className={classes.newsCard}>
    //                             <CardActionArea>
    //                                 <CardMedia
    //                                     component='img'
    //                                     alt={article.title}
    //                                     height='140'
    //                                     image={article.urlToImage}
    //                                     title={article.title}
    //                                 />
    //                                 <CardContent>
    //                                     <Typography gutterBottom variant="h5" component="h2" style={{ fontSize: font + 5 }}>
    //                                         {article.title}
    //                                     </Typography>
    //                                     <Typography variant="body2" color="textSecondary" component="p" style={{ fontSize: font }}>
    //                                         {article.description}
    //                                     </Typography>
    //                                 </CardContent>
    //                             </CardActionArea>
    //                             <CardActions>
    //                                 <Button size="small" color="primary" className='buttonLeft'>
    //                                     Full Article
    //                                 </Button>
    //                                 <Button size="small" color="primary" className='buttonRight'>
    //                                     Read Later
    //                                 </Button>
    //                             </CardActions>
    //                         </Card>
    //                     </Grid>
    //                 ))}
    //             </Grid>
    //         </Grid>
    //     </Grid>
    // );
{/*
    <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper} />
            </Grid>
        </Grid>
    </Grid> */}


    // return (
    //     <div className="container-fluid">
    //         <Row md={4}>
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
    //                         <Card.Title>{article.title}</Card.Title>
    //                         <Card.Text>{article.description}</Card.Text>
    //                         <p>Read Full Article
    //                             <a
    //                                 href={article.url}
    //                                 target="_blank"
    //                                 onClick={() => { addResource(article, 'article'); }}
    //                             > Here</a></p>
    //                     </Card.Body>
    //                 </StyledCard>
    //             ))}
    //         </Row>
    //     </div>
    //  );
};
export default News;