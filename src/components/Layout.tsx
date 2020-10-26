import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Layout({
    children,
    title = 'Default title',
    themeToggler,
}) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Header themeToggler={themeToggler} />
            {children}
            <Footer />
        </>
    );
}
