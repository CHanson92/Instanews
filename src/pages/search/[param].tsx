import { GetStaticProps } from 'next'
import { NextRouter, withRouter } from 'next/router'
import { url } from '../../utils/strings'
import Layout from '../../components/shared/Layout'
import { articleFetcher } from '../../utils/fetcher'
import { Article } from '../../interfaces'
import ArticleContainer from '../../components/articles/ArticleContainer'

interface Props {
    router: NextRouter
    articles: Article[]
}

function Search({ router, articles }: Props) {
    return (
        <Layout title={`Search for: ${router.query.param}`}>
            <ArticleContainer articles={articles} />
        </Layout>
    )
}

export async function getStaticPaths() {
    return {
        paths: [`/search/[param]`],
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    try {
        if (context.params === undefined) return { props: {} }
        const param = context.params.param
        const res = await articleFetcher(`${url}everything?q=${param}`)
        const articles = res.filter(
            (article) => article.urlToImage !== null && article.description !== ''
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

export default withRouter(Search)
