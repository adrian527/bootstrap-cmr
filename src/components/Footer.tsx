import { styled } from "styled-components";
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import colors from "../assets/colors";
import { scrollEvent } from "../utils/scrollEvent";

const Footer = () => {
    return <FooterContainer className="pt-3 mt-5">
        <Nav className="justify-content-center pb-2 mb-3">
            <LinkContainer to='/bootstrap-cmr'>
                <Nav.Link onClick={scrollEvent}>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/bootstrap-cmr/faqs'>
                <Nav.Link>FAQs</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/bootstrap-cmr/contact'>
                <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
        </Nav>
        <p className="text-center">© 2022 Company, Inc</p>
    </FooterContainer>
}

const FooterContainer = styled.footer`
    p, a {
        color: ${colors.primary} !important;
    }

    div {
        border-bottom: 1px solid ${colors.primary};
    }
`;

export default Footer;