import styled from 'styled-components';

const FooterComponent = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1em;
`;

const Footer = () => (
    <FooterComponent>© Copyright 2019 INSTANEWS</FooterComponent>
);

export default Footer;
