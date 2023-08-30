import { useParams } from "react-router-dom";
import BreadcrumbComponent from "../components/Breadcrumb";
import { useContext, useMemo } from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import { default as ProductsCards } from "../components/Products";
import Badge from 'react-bootstrap/Badge';
import { ProductsContext } from "../provider/ProductsProvider";

const Products = () => {
    const { productName } = useParams();
    const products = useContext(ProductsContext);
    const displayName = useMemo(() => productName?.replaceAll('-', ' '), [productName]);
    const { price, pictureUrl } = useMemo(() => products.find(product => product.name === displayName) || { price: 0, pictureUrl: '' }, [displayName, products]);
    const bestseller = price && price < 200 && <Badge bg="primary" pill className="pl-2">Bestseller</Badge>;

    return <>
        <BreadcrumbComponent currentPage="Products" parameter={displayName} />
        <Row className="mb-5">
            <Col xs={12} md={4} className="mb-4">
                <Image src={pictureUrl} thumbnail />
            </Col>
            <Col xs={12} md={8}>
                <h1 className="text-capitalize mb-4">{displayName}</h1>
                <p>This is a <strong>{displayName}</strong> description. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias maxime ab earum molestiae, totam facere quibusdam porro! Facilis nisi dolorum aspernatur debitis excepturi neque veniam temporibus nihil, quas laudantium vero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe, beatae temporibus commodi deleniti quam iste error? Modi, dicta neque eveniet assumenda repudiandae cum quibusdam, veniam sit, minima voluptates deleniti.</p>
                <p className="h2">Current price: {price}$ {bestseller}</p>
            </Col>
        </Row>
        <hr />
        <ProductsCards />
    </>
};

export default Products;