import React from 'react';

const Article = ({ article }) => (
    <div
        className='article lazyload'
        data-bg={article.multimedia[4]['url']}
        data-sizes='auto'
    >
        <a href={article.url}>
            <h1 className='summary'>{article.abstract}</h1>
        </a>
    </div>
);

export default Article;
