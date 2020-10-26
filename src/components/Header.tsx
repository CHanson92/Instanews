import styled from 'styled-components';

interface Theme {
    theme: {
        body: string;
        text: string;
    };
}

const HeaderComponent = styled.header<Theme>`
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    transition: all 0.25s linear;
    background: ${({ theme }) => theme.body};
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

const DarkModeButton = styled.button``;

const Header = ({ themeToggler }) => (
    <HeaderComponent>
        <Title>Instanews</Title>
        <DarkModeButton onClick={themeToggler}>Switch theme</DarkModeButton>
    </HeaderComponent>
);

export default Header;
