import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { LinkContainer } from 'react-router-bootstrap'

const BreadcrumbComponent = ({ currentPage, parameter }: { currentPage: string; parameter?: string }) => {
    return (
        <Breadcrumb className='mb-4'>
            <LinkContainer to='/bootstrap-cmr'>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
            </LinkContainer>
            <Breadcrumb.Item active>{currentPage}</Breadcrumb.Item>
            {parameter && <Breadcrumb.Item className="text-capitalize" active>{parameter}</Breadcrumb.Item>}
        </Breadcrumb>
    );
}

export default BreadcrumbComponent;