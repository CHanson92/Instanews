import styled from 'styled-components';
import Selector from './Selector';

const HeaderComponent = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    margin-bottom: 2em;
    border-bottom: 1px solid lightgray;

    @media screen and (min-width: 600px) {
        font-size: 1.25em;
    }

    @media screen and (min-width: 1200px) {
        font-size: 1.5em;
    }
`;

const Title = styled.h1``;

const Header = ({ selectFilter }) => (
    <HeaderComponent>
        <Title>Instanews</Title>
        <Selector selectFilter={selectFilter} />
    </HeaderComponent>
);

export default Header;
