import { GetStaticProps } from 'next'

import Layout from '../components/Layout'
import { Articles } from '../interfaces/newsApi'
import { newsApiKey, newsApiUrl } from '../utils/strings'

interface Props {
    articles: Articles
}

export default function Home({ articles }: Props): JSX.Element {
    console.log(articles)
    return (
        <Layout title="Home">
            <h1>Home</h1>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    try {
        const res = await fetch(`${newsApiUrl}top-headlines?country=gb&apiKey=${newsApiKey}`)
        const json = await res.json()
        const articles = await json.articles

        return {
            props: {
                articles
            }
        }
    } catch (error) {
        throw Error(error.message)
    }
}
