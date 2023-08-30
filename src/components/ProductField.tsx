import { useId, useContext, useState, ChangeEventHandler } from 'react';
import { ProductsValues } from "../assets/products";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ProductsDispatchContext } from '../provider/ProductsProvider';
import { ThemeContainer } from './Products';

interface ProductForm {
    formValues: ProductsValues,
    errors: {
        name?: string;
        price?: string;
        pictureUrl?: string;
    }
};

const fieldsMinLength = 7;
const fieldsMaxLength = 150;

const ProductField = ({ name, pictureUrl, price, setShow }: ProductsValues & { setShow: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const fieldId = useId();
    const dispatchProducts = useContext(ProductsDispatchContext);
    const initialFormValues = { formValues: { name, pictureUrl, price }, errors: {} };
    const [productForm, setProductFrom] = useState<ProductForm>(initialFormValues);
    const handleToast = () => {
        setShow(true);
        setTimeout(() => setShow(false), 3000);
    }

    const handleChange: ChangeEventHandler = (evt) => {
        const name = (evt.target as HTMLInputElement).name;
        const value = (evt.target as HTMLInputElement).value;
        const nextErrors = { ...productForm.errors };
        const isWrongLength = !isNaN(+value) && +value > 0 ? false : value.length <= fieldsMinLength || value.length > fieldsMaxLength;

        if (isWrongLength) {
            nextErrors[name as keyof typeof nextErrors] = 'Field is required';
        } else {
            nextErrors[name as keyof typeof nextErrors] = '';
        }

        setProductFrom({
            errors: nextErrors,
            formValues: {
                ...productForm.formValues,
                [name]: value
            }
        });
    }

    const { name: fieldName, price: fieldPrice, pictureUrl: fieldPictureUrl } = productForm.formValues;
    const { name: errorName, price: priceName, pictureUrl: errorPictureUlr } = productForm.errors;
    const hasErrors = !!(errorName?.length || priceName?.length || errorPictureUlr?.length);
    const fieldsTouched = !!(fieldName?.length && !!fieldPrice && fieldPictureUrl?.length);

    return <ThemeContainer>
        {!name && <Form.Group className="mb-3" controlId={`${fieldId}-${name}-price`}>
            <Form.Label>Product Name</Form.Label>
            <Form.Control name='name' type="text" value={fieldName} onChange={handleChange} isInvalid={!!errorName?.length} />
            <Form.Control.Feedback type="invalid">
                Product name should have from {fieldsMinLength} to {fieldsMaxLength} characters.
            </Form.Control.Feedback>
        </Form.Group>}
        <Form.Group className="mb-3" controlId={`${fieldId}-${name}-price`}>
            <Form.Label>Price</Form.Label>
            <Form.Control name='price' type="number" value={fieldPrice} onChange={handleChange} min={0} isInvalid={!!priceName?.length} />
            <Form.Control.Feedback type="invalid">
                Incorrect price value.
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId={`${fieldId}-${name}-link`}>
            <Form.Label>Picture link</Form.Label>
            <Form.Control name='pictureUrl' type="url" value={fieldPictureUrl} onChange={handleChange} isInvalid={!!errorPictureUlr?.length} />
            <Form.Control.Feedback type="invalid">
                Url should have from {fieldsMinLength} to {fieldsMaxLength} characters.
            </Form.Control.Feedback>
        </Form.Group>
        {
            name
                ?
                <>
                    <Button variant="outline-primary" size="sm" className="me-2" onClick={
                        () => {
                            dispatchProducts({ type: 'Remove', name });
                            handleToast();
                        }
                    }>Remove</Button>
                    <Button variant="outline-primary" size="sm" onClick={() => {
                        dispatchProducts({ type: 'Edit', name, product: productForm.formValues });
                        handleToast();
                    }} disabled={hasErrors || (fieldPrice === price && fieldPictureUrl === pictureUrl)}>Edit</Button>
                </>
                :
                <Button variant="outline-primary" size="sm" disabled={!fieldsTouched || hasErrors} onClick={() => {
                    dispatchProducts({ type: 'Add', product: productForm.formValues });
                    setProductFrom(initialFormValues);
                    handleToast()
                }}>Add</Button>}
    </ThemeContainer>
}

export default ProductField;