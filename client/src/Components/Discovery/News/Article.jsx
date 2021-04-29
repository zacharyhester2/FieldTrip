import React from 'react';
import styled from 'styled-components';

const ArticleStyle = styled.div`
    border-color: white;
    border-radius: 10px;
    border-width: 2px;
`

const Article = ({ article }) => {


    return (
        <ArticleStyle>
            <div>
                {article.title}
                {article.author}
                {article.urlToImage}
            </div>
        </ArticleStyle>
      );
}

export default Article;