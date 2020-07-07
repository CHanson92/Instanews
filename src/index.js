import React, { lazy, Suspense } from 'react';
import { render } from 'react-dom';
import './assets/scss/style.scss';
import loadingIndicator from './assets/images/ajax-loader.gif';
import useResults from './hooks/useResults';

const Header = lazy(() => import('./components/Header'));
const Articles = lazy(() => import('./components/Articles'));

const App = () => {
    const { results, selectFilter } = useResults();

    return (
        <Suspense fallback={<img alt='loading' src={loadingIndicator} />}>
            <Header selectFilter={selectFilter} />
            <Articles results={results} />
            <footer>© Copyright 2019 INSTANEWS</footer>
        </Suspense>
    );
};

const rootElement = document.getElementById('app');
render(<App />, rootElement);
