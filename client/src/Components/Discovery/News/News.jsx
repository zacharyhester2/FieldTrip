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
    border-radius: 45px;
    outline: none;
    margin-bottom: 5rem;
    :hover {
        transform: scale(1.1);
        z-index: 1;
        box-shadow: 0 0 0.7rem rgba(0, 0, 0, 0.9);
    }
`

const News = ({ addResource, discView, search }) => {
    const [news, setNews] = useState([]);



    const query = `${search}`;

const ContainerStyled = styled.div`
    background-color: whitesmoke;
    height: 100vh;
    width: 100%;
`

const News = ({ addResource, discView }) => {
    const [news, setNews] = useState([]);

    const search = `${discView}`;

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
        <ContainerStyled>
      

            <Row md={4}>
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
        


        </ContainerStyled>
      );
}

export default News;