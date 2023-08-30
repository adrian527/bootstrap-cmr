import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { styled } from 'styled-components';
import colors from '../assets/colors';

const ColumnText = () => {

    return <SectionContainer>
        <Row className='mt-5 pt-5 text-center'>
            <Col xs={12} md={4} >
                <h2 className='fs-1'>History</h2>
                <p className='fs-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatem quia corporis rerum harum odit architecto! Enim, tenetur. Incidunt veniam perferendis sapiente maxime nulla ullam animi corporis cupiditate accusamus. Quae.</p>
            </Col>
            <Col xs={12} md={4}>
                <h2 className='fs-1'>Dishes</h2>
                <p className='fs-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatem quia corporis rerum harum odit architecto! Enim, tenetur. Incidunt veniam perferendis sapiente maxime nulla ullam animi corporis cupiditate accusamus. Quae.</p>
            </Col>
            <Col xs={12} md={4}>
                <h2 className='fs-1'>Climate</h2>
                <p className='fs-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatem quia corporis rerum harum odit architecto! Enim, tenetur. Incidunt veniam perferendis sapiente maxime nulla ullam animi corporis cupiditate accusamus. Quae.</p>
            </Col>
        </Row>
    </SectionContainer>
};

const SectionContainer = styled.div`
    h2 {
        color: ${colors.primary};
    }
`;

export default ColumnText;