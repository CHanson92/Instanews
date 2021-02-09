import { GetStaticProps } from 'next'
import useSWR from 'swr'

import Layout from '../components/Layout'
import { Article } from '../interfaces'
import { fetcher } from '../utils/fetcher'
import { url } from '../utils/strings'

interface Props {
    articles: Article[]
}

export default function Home({ articles: topHeadlines }: Props): JSX.Element {
    const { data } = useSWR(
        `${url}top-headlines?country=gb&apiKey=${process.env.API_KEY}`,
        fetcher,
        { initialData: topHeadlines }
    )

    return (
        <Layout title="Home">
            <h1>hello</h1>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    try {
        const getTopHeadlines = await fetcher(
            `${url}top-headlines?country=gb&apiKey=${process.env.API_KEY}`
        )
        const { articles } = getTopHeadlines

        return {
            props: {
                articles
            }
        }
    } catch (error) {
        throw Error(error.message)
    }
}
