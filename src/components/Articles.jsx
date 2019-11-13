import React from 'react'
import 'lazysizes'
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks'
import 'lazysizes/plugins/bgset/ls.bgset'
import 'lazysizes/plugins/attrchange/ls.attrchange'
import loadingIndicator from '../assets/images/ajax-loader.gif'

const Articles = props => {
    let articles = props.articles
    let loading = props.loading
    return (
        <section className='articles'>
            {loading === true ? (
                <div className='loading'>
                    <img src={loadingIndicator} />
                </div>
            ) : (
                articles
                    .filter(article => article.multimedia.length != 0)
                    .map((article, index) => (
                        <div
                            key={index}
                            className='articleContainer lazyload'
                            data-bg={article.multimedia[4]['url']}
                            data-sizes='auto'
                        >
                            <a href={article.url}>
                                <h1 className='summary'>{article.abstract}</h1>
                            </a>
                        </div>
                    ))
            )}
        </section>
    )
}

export default Articles
