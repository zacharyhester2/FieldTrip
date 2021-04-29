import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap/';
import Article from './Article.jsx';
import axios from 'axios';

const News = () => {
    const [news, setNews] = useState([]);

    const search = 'tulip';
    
    const getNews = (search) => {
        axios.get(`/newsQ/:${search}`)
        .then(({data}) => {
            setNews(data);
        }).catch()
    }

    useEffect(() => {
        getNews(search);
    }, [])

    return (
        <div>
            <h1>NEWS</h1>
                {console.log(news, 'NEWS')}
            <Carousel>
            {news.map((article, i) => (
            <Carousel.Item key={i}>
                <img className="news-img" src={article.urlToImage}/>
                <Carousel.Caption>
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                </Carousel.Caption>
                {/* <Article article={article}/> */}
            </Carousel.Item>
            ))}
            </Carousel>
        </div>
      );
}

export default News;