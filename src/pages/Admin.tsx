import { useContext, useMemo, Fragment, useState } from "react";
import { ProductsContext } from "../provider/ProductsProvider";
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { ThemeContainer } from "../components/Products";
import ProductField from "../components/ProductField";
import ToastMessage from "../components/ToastMessage";

const Admin = () => {
    const products = useContext(ProductsContext);
    const [show, setShow] = useState(false);
    const productsFormItems = useMemo(() => products.map((product) => <Fragment key={product.name}>
        <h2 className="h3 mt-5 mb-3 text-capitalize text-center">{product.name}</h2>
        <ProductField {...product} setShow={setShow} />
    </Fragment>), [products]);

    return <ThemeContainer>
        <Row>
            <Col xs={12} lg={6} className="mx-auto">
                <h1 className="h2 text-capitalize text-center">Manage products</h1>
                <hr />
                <Form>
                    <h2 className="h3 mt-4 mb-3 text-capitalize text-center">Add new product</h2>
                    <ProductField name="" price={0} pictureUrl="" setShow={setShow} />
                    <hr />
                    {productsFormItems}
                </Form>
            </Col>
        </Row>
        <ToastMessage show={show} setShow={setShow} />
    </ThemeContainer>
}

export default Admin;