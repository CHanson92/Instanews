import styled from 'styled-components';

const FooterComponent = styled.footer`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-top: 3em;
    margin-bottom: 0.5em;
`;

const Footer = () => (
    <FooterComponent>© Copyright 2019 INSTANEWS</FooterComponent>
);

export default Footer;
