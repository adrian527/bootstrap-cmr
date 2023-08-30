import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const IconText = () => {
    return <Row className='mt-5 pt-5'>
        <Col xs={12} md={3} className='text-center'>
            <Image src="https://media.istockphoto.com/id/1050999680/vector/chocolate-muffin-with-blueberries.jpg?s=612x612&w=0&k=20&c=RV33a5gOd5Qj0yf8nzphIv-wfjE-Vc-MYNarRjD8aPc=" className='d-block w-100' rounded />
        </Col>
        <Col xs={12} md={9}>
            <p className='fs-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatem quia corporis rerum harum odit architecto! Enim, tenetur. Incidunt veniam perferendis sapiente maxime nulla ullam animi corporis cupiditate accusamus. Quae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatem quia corporis rerum harum odit architecto! Enim, tenetur. Incidunt veniam perferendis sapiente maxime nulla ullam animi corporis cupiditate accusamus. Quae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatem quia corporis rerum harum odit architecto! Enim, tenetur. Incidunt veniam perferendis sapiente maxime nulla ullam animi corporis cupiditate accusamus. Quae.</p>
        </Col>
    </Row>
};

export default IconText;