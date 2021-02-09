import Head from 'next/head'

import Footer from '../components/Footer'
import Header from '../components/Header'

interface Props {
    children: React.ReactNode
    title: string
}

export default function Layout({ children, title = 'Default title' }: Props): JSX.Element {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Header />
            {children}
            <Footer />
        </>
    )
}
