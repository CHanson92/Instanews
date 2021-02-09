import { GetStaticProps } from 'next'

import ArticleContainer from '../components/articles/ArticleContainer'
import Layout from '../components/shared/Layout'
import { Props } from '../interfaces'
import { articleFetcher } from '../utils/fetcher'
import { url } from '../utils/strings'

export default function Home({ articles }: Props): JSX.Element {
    return (
        <Layout title="Home">
            <ArticleContainer articles={articles} />
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    try {
        const articles = await articleFetcher(
            `${url}top-headlines?country=gb&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
        )

        return {
            props: {
                articles
            }
        }
    } catch (error) {
        throw Error(error.message)
    }
}
