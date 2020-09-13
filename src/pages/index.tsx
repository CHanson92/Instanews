import useResults from '../hooks/useResults';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';
import GlobalStyle from '../theme/globalStyle';
import Header from '../components/Header';
import Articles from '../components/Articles';
import Footer from '../components/Footer';

const Home = () => {
    const { selectFilter, results } = useResults();

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header selectFilter={selectFilter} />
            <Articles results={results} />
            <Footer />
        </ThemeProvider>
    );
};

export default Home;
