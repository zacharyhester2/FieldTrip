import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, CardDeck, Jumbotron, Image } from 'react-bootstrap/';
import axios from 'axios';
import styled from 'styled-components';
import { Button } from '@material-ui/core'

// const Caption = styled(Carousel.Caption)`
//         background: rgba(25, 25, 25, 0.6) !important;
//         width: fit-content;
//         margin: 0 auto;
//         padding: 1rem 1rem;
// `

const News = ({ addResource, discView }) => {
    const [news, setNews] = useState([]);


    
    const search = 'milky way';

    const getNews = (search) => {
        axios.get(`/newsQ/:${search}`)
        .then(({data}) => {
            setNews(data);
        }).catch()
    }


    useEffect(() => {
        getNews(search);
    }, [discView])

    
    {/* {news.map((article, i) => (
            <Img key={i}>
                <Col>
                <Image src={article.urlToImage} 
                key={i}
                className="news-img 
                img-responsive 
                img-fluid rounded-pill
                mb-3"/>
                </Col>
            </Img>
    ))} */}

    return (
        
            <div>
                    <Row md={6} 
                    className="mb-3"
                    overflow="auto">
                        {news.map((article, i) => (
                            <Card className="mb-5 mt-5 mr-4 ml-4" 
                            border="dark" 
                            text="muted" 
                            bg="light" 
                            width="18rem"
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
                            </Card>
                            ))}   
                    </Row>
                </div> 
            
        
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