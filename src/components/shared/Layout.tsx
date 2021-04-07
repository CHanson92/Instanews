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
            <main className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:mx-4">
                {children}
            </main>
            <Footer />
        </>
    )
}
