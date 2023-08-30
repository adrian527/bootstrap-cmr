import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { styled } from 'styled-components';
import colors from '../assets/colors';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext } from 'react';
import { ProductsContext } from '../provider/ProductsProvider';

const Products = () => {
    const products = useContext(ProductsContext);

    return <ThemeContainer>
        <Row className='text-center mt-5 mb-3'>
            <h2>All Products</h2>
        </Row>
        <Row xs={1} md={3} className="g-4">
            {products.map(({ name, pictureUrl }) => (
                <Col key={name}>
                    <Card>
                        <Card.Img variant="top" src={pictureUrl} width={401} height={401} />
                        <Card.Body>
                            <Card.Title className="text-capitalize">{name}</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                            <div className='text-center'>
                                <LinkContainer to={`/products/${name.replaceAll(' ', '-')}`}>
                                    <Button className="text-capitalize" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>See product</Button>
                                </LinkContainer>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </ThemeContainer >
}

export const ThemeContainer = styled.div`
    &, .card-title {
        color: ${colors.primary};
    }

    .btn-primary, .btn-outline-primary:hover {
        color: ${colors.white}!important;
    }
`;

export default Products;