import React, { lazy, Suspense } from 'react';
import 'lazysizes';
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks';
import 'lazysizes/plugins/bgset/ls.bgset';
import 'lazysizes/plugins/attrchange/ls.attrchange';
import Loading from './Loading';

const Article = lazy(() => import('./Article'));

const Articles = ({ results }) => (
    <Suspense fallback={<Loading />}>
        <section className='articles'>
            {results
                ? results
                      .filter(
                          (article) =>
                              article.multimedia !== null &&
                              article.multimedia.length !== 0,
                      )
                      .map((article, index) => (
                          <Article article={article} key={index} />
                      ))
                : null}
        </section>
    </Suspense>
);

export default Articles;
