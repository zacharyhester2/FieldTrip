import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, CardDeck, Jumbotron, Image } from 'react-bootstrap/';
import axios from 'axios';
import styled from 'styled-components';
import { Button } from '@material-ui/core'

const StyledCard = styled(Card)`
    transform-origin: top center;
    transition: transform 300ms;
    position: relative;
    z-index: 0;
    border: none;
    outline: none;
    margin-bottom: 5rem;
    :hover {
        transform: scale(1.3);
        z-index: 1;
        box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.9);
    }
`

const News = ({ addResource, discView }) => {
    const [news, setNews] = useState([]);



    const search = `${discView}`;

    const getNews = (search) => {
        axios.get(`/newsQ/:${search}`)
        .then(({data}) => {
            setNews(data);
        }).catch()
    }


    useEffect(() => {
        getNews(search);
    }, [discView])


    return (
        <Row md={4}
        style={{justifyContent: "space-between", maxWidth: "1400px"}}
        >
            {news.map((article, i) => (
                <StyledCard className="mb-4 mt-4 mr-3 ml-3"
                text="muted"
                bg="light"
                >
                <Image src={article.urlToImage}
                    key={i}
                    className="news-img-top
                    img-responsive
                    img-fluid"
                    >
                    {console.log(article)}
                </Image>
                    <Card.Body>
                        <Card.Title>{article.title}</Card.Title>
                        <Card.Text>{article.description}</Card.Text>
                        <p>Read Full Article
                <a
                    href={article.url}
                    target="_blank"
                    onClick={() => { addResource(article, 'article'); }}
                > Here</a></p>
                    </Card.Body>
                </StyledCard>
                ))}
        </Row>
      );
}

        // <Carousel fade>
        //     {news.map((article, i) => (
        //         <Carousel.Item key={i}>
        //             <h1>Articles</h1>
        //                 <Img>
        //                     <img className="news-img mx-auto" src={article.urlToImage}/>
        //                 </Img>
        //                 <Caption>
        //                     <h1>{article.title}</h1>
        //                     <p>{article.description}</p>
        //                 </Caption>
        //         </Carousel.Item>
        //         ))}
        // </Carousel>
export default News;