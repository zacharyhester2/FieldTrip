import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, CardDeck, Jumbotron, Image } from 'react-bootstrap/';
import axios from 'axios';
import styled from 'styled-components';
import { Button } from '@material-ui/core'
import 'bootstrap/dist/css/bootstrap.min.css';


const StyledCard = styled(Card)`
    transform-origin: top center;
    transition: transform 300ms;
    position: relative;
    z-index: 0;
    border-radius: 45px;
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
    border-radius: 45px;
}
`
// const ContainerStyled = styled.div`
//     background-color: rgb(9, 11, 23);
//     height: 100%;
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     text-align: center;
// `
const News = ({ addResource, discView }) => {
    const [news, setNews] = useState([]);
    const query = `${discView}`;
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
        // <ContainerStyled>
            <div className="container-fluid">
            <Row md={4}>
                {news.map((article, i) => (
                    <StyledCard className="mb-4 mt-4 mr-4 ml-4"
                    text="muted"
                    bg="light"
                    >
                    <Image src={article.urlToImage}
                        key={i}
                        className="news-img-top"
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
            </div>
        // </ContainerStyled>
      );
};
export default News;