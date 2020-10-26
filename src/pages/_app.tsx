import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../theme/theme';
import GlobalStyle from '../theme/globalStyle';
import { useDarkMode } from '../hooks/useDarkMode';
import '../public/fonts/stylesheet.css';

const App = ({ Component, pageProps }): JSX.Element => {
    const { theme, themeToggler } = useDarkMode();

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <Head>
                <meta
                    name='viewport'
                    content='initial-scale=1.0, width=device-width'
                />
                <meta charSet='utf-8' />
            </Head>
            <GlobalStyle />
            <Component themeToggler={themeToggler} {...pageProps} />
        </ThemeProvider>
    );
};

export default App;
