import { Article, Props } from '../../interfaces'

const ArticleContainer = ({ articles }: Props) => {
    return (
        <>
            {articles.map(
                (article: Article, index: number): JSX.Element => (
                    <article key={index}>
                        <h1>{article.source.name}</h1>
                        <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                            <img src={article.urlToImage} />
                        </a>
                        <p>{article.description}</p>
                    </article>
                )
            )}
        </>
    )
}

export default ArticleContainer
