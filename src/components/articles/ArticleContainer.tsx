import { Article, Props } from '../../interfaces'

const ArticleContainer = ({ articles }: Props) => {
    return (
        <>
            {articles
                ? articles.map(
                      (article: Article, index: number): JSX.Element => (
                          <article key={index} className="container mb-3">
                              <div className="flex justify-between font-semibold">
                                  <h1>{article.source.name}</h1>
                                  <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
                              </div>
                              <a href={article.url} target="_blank" rel="noopener noreferrer">
                                  <div
                                      style={{ backgroundImage: `url(${article.urlToImage})` }}
                                      className="min-w-full bg-center bg-cover h-40 sm:h-60 md:h-64"
                                  />
                              </a>
                              <p className="text-center mt-1">{article.description}</p>
                          </article>
                      )
                  )
                : null}
        </>
    )
}

export default ArticleContainer
