import styled from 'styled-components';

interface Props {
    background?: string;
    href?: string;
}

const Link = styled.a<Props>`
    text-decoration: none;
`;

const Container = styled.div`
    display: grid;
    grid-template-rows: 20em 20%;
    grid-gap: 0.5em;
`;

const Image = styled.div<Props>`
    height: 100%;
    background-image: url(${(props) => props.background});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

const Footer = styled.div``;

const Summary = styled.p`
    text-align: center;
    color: black;
    padding-bottom: 0.5em;
`;

const Article = ({ article }) => (
    <Link href={article.url} target='_blank' rel='nofollow noreferrer'>
        <Container>
            <Image background={article.multimedia[0]['url']} />
            <Footer>
                <Summary>{article.abstract}</Summary>
            </Footer>
        </Container>
    </Link>
);

export default Article;
