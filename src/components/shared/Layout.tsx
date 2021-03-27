import Head from 'next/head'

import Footer from './Footer'
import Header from './Header'

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
