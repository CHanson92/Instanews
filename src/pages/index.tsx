import { GetStaticProps } from 'next';
import Articles from '../components/Articles';
import Layout from '../components/Layout';
import { newsApiUrl, newsApiKey } from '../utils/strings';

export default function Home({ articles, themeToggler }) {
    return (
        <Layout title='Home' themeToggler={themeToggler}>
            <Articles articles={articles} />
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    try {
        const res = await fetch(
            `${newsApiUrl}top-headlines?country=gb&apiKey=${newsApiKey}`,
        );
        const json = await res.json();
        const articles = await json.articles;

        return {
            props: {
                articles,
            },
        };
    } catch (error) {
        throw Error(error.message);
    }
};
