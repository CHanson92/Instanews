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
    grid-template-rows: min-content 20em min-content;
    grid-row-gap: 0.5em;
`;

const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Source = styled.p``;

const DatePublished = styled.p``;

const Image = styled.div<Props>`
    height: 100%;
    background-image: url(${(props) => props.background});
    background-size: cover;
    background-repeat: no-repeat;
`;

const Summary = styled.p`
    text-align: center;
    padding-bottom: 0.5em;
`;

const Article = ({ article }) => {
    const date: Date = new Date(article.publishedAt);
    const dateTime = date.toLocaleDateString();

    return (
        <Container>
            <ContainerHeader>
                <Source>{article.source.name}</Source>
                <DatePublished>{dateTime}</DatePublished>
            </ContainerHeader>
            <Link href={article.url} target='_blank' rel='nofollow noreferrer'>
                <Image background={article.urlToImage} />
                <Summary>
                    {article.title.split(' - ').shift().toString()}
                </Summary>
            </Link>
        </Container>
    );
};

export default Article;
