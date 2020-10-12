import { GetStaticProps } from 'next';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';
import GlobalStyle from '../theme/globalStyle';
import Header from '../components/Header';
import Articles from '../components/Articles';
import Footer from '../components/Footer';
import { apiKey, topStoriesUrl } from '../utils/strings';

const Home = ({ articles }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Articles results={articles} />
        <Footer />
    </ThemeProvider>
);

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch(`${topStoriesUrl}home${apiKey}`);
    const articles = await res.json().then((section) => section.results);

    return {
        props: {
            articles,
        },
        // Re-generate the page to check for new articles
        revalidate: 10,
    };
};

export default Home;
