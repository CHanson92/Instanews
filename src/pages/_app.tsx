import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import ToggleProvider from '../context/ToggleContext'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta charSet="utf-8" />
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <ToggleProvider>
                <Component {...pageProps} />
            </ToggleProvider>
        </>
    )
}

export default App
