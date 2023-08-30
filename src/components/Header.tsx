import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import { styled } from 'styled-components';
import colors from '../assets/colors';
import { scrollEvent } from '../utils/scrollEvent';
import { ProductsContext } from '../provider/ProductsProvider';

const Header = () => {
    const products = useContext(ProductsContext);

    return <HeaderTheme>
        <Navbar expand="lg" className="bg-body-tertiary navbar-dark" fixed='top'>
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand onClick={scrollEvent}>
                        <img
                            alt=""
                            src="https://cdn.pixabay.com/photo/2021/04/24/01/01/cupcake-6203012_1280.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Muffins Store
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/bootstrap-cmr">
                            <Nav.Link onClick={scrollEvent}>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/bootstrap-cmr/contact">
                            <Nav.Link onClick={scrollEvent}>Contact</Nav.Link>
                        </LinkContainer>
                        <NavDropdown title="Products" id="collasible">
                            {products.map(({ name }) => <LinkContainer key={name} to={`/bootstrap-cmr/products/${name.replaceAll(' ', '-')}`}>
                                <NavDropdown.Item onClick={scrollEvent}>{name}</NavDropdown.Item>
                            </LinkContainer>)}
                        </NavDropdown>
                        <LinkContainer to="/bootstrap-cmr/admin">
                            <Nav.Link onClick={scrollEvent}>Admin</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Nav>
                        <Nav.Link href="tel:+48123123123">Contact: +48 123 123 123</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </HeaderTheme>
}

const HeaderTheme = styled.div`
    .nav-link {
        color: ${colors.white} !important;
    }

    .nav-link:hover, .dropdown-item:hover {
        text-decoration: underline;
    }

    .navbar-toggler {
        border: none !important;
    }

    hr {
        border-top: 1px solid white !important;
        padding: 0 5px;
    }
    
    .dropdown-menu {
        border: 1px solid white !important;
    }

    .dropdown-item {
        text-transform: capitalize;
    }
`;

export default Header;