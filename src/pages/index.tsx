import { GetStaticProps } from 'next'

import ArticleContainer from '../components/articles/ArticleContainer'
import Layout from '../components/shared/Layout'
import { Props } from '../interfaces'
import { articleFetcher } from '../utils/fetcher'
import { url } from '../utils/strings'

export default function Home({ articles }: Props) {
    return (
        <Layout title="Home">
            <main>
                <ArticleContainer articles={articles} />
            </main>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    try {
        const articles = await articleFetcher(`${url}top-headlines?country=gb`)

        return {
            props: {
                articles
            }
        }
    } catch (error) {
        throw Error(error.message)
    }
}