import dynamic from 'next/dynamic';
import styled from 'styled-components';

const Article = dynamic(() => import('./Article'));

const ArticlesContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1em;
    margin: 8em 1em 0px;

    @media screen and (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
        margin: 10em 1em 0px;
    }

    @media screen and (min-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
        margin: 12em 1em 0px;
    }

    @media screen and (min-width: 1600px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

const Articles = ({ results }) => (
    <ArticlesContainer>
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
    </ArticlesContainer>
);

export default Articles;
