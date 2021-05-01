import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap/';
import axios from 'axios';
import styled from 'styled-components';
import { Button } from '@material-ui/core'

const Caption = styled(Carousel.Caption)`
        background: rgba(25, 25, 25, 0.6) !important;
        width: fit-content;
        margin: 0 auto;
        padding: 0 1rem;
`

const News = ({ addResource, discView }) => {
    const [news, setNews] = useState([]);

    const search = `${discView}`;
    console.log('SEARCH QUERY', discView);

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
        <div>
            <h1>NEWS</h1>
                {console.log(news, 'NEWS')}
            <Carousel>
            {news.map((article, i) => (
            <Carousel.Item key={i}>
                <img className="news-img" src={article.urlToImage}/>
                <Caption>
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                    <p>Read Full Article
                        <a
                            href={article.url}
                            target="_blank"
                            onClick={() => { addResource(article, 'article'); }}
                        > Here</a>
                    </p>
                </Caption>
                {/* <Article article={article}/> */}
            </Carousel.Item>
            ))}
            </Carousel>
        </div>
      );
}

export default News;