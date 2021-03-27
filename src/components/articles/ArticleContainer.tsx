import useSWR from 'swr'

import { Article, Props } from '../../interfaces'
import { articleFetcher } from '../../utils/fetcher'
import { url } from '../../utils/strings'

const ArticleContainer = ({ articles }: Props): JSX.Element => {
    const {
        data
    } = useSWR(
        `${url}top-headlines?country=gb&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`,
        articleFetcher,
        { initialData: articles }
    )

    return data.map(
        (article: Article, index: number): JSX.Element => (
            <article key={index}>
                <p>{article.title}</p>
            </article>
        )
    )
}

export default ArticleContainer
