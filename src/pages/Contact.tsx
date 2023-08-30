import { FormEventHandler, useState, ChangeEventHandler } from "react";
import BreadcrumbComponent from "../components/Breadcrumb";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Button from 'react-bootstrap/Button';
import colors from "../assets/colors";

enum FormFields {
    'Title' = 'title',
    'Message' = 'message'
}

interface ContactForm {
    formValues: {
        [FormFields.Message]: string,
        [FormFields.Title]: string,
    },
    errors: {
        [FormFields.Message]?: string,
        [FormFields.Title]?: string,
    },
}

const initialForm: ContactForm = {
    formValues: {
        [FormFields.Message]: '',
        [FormFields.Title]: '',
    },
    errors: {}
};

const fieldsMinLength = 7;
const titleMaxLength = 50;
const messageMaxLength = 400;

const Contact = () => {
    const [contactForm, setContactForm] = useState(initialForm);
    const { message, title } = contactForm.formValues;
    const { message: messageError, title: titleError } = contactForm.errors;

    const handleChange: ChangeEventHandler = (evt) => {
        const name = (evt.target as HTMLInputElement).name;
        const value = (evt.target as HTMLInputElement).value;
        const nextErrors = { ...contactForm.errors };
        const isTitleToLong = name === FormFields.Title && value.length > titleMaxLength;
        const isMessageToLong = name === FormFields.Message && value.length > messageMaxLength;
        const isToShort = value.length < fieldsMinLength;

        if (isTitleToLong || isToShort || isMessageToLong) {
            nextErrors[name as keyof typeof nextErrors] = 'Field is required';
        } else {
            nextErrors[name as keyof typeof nextErrors] = '';
        }

        setContactForm({
            errors: nextErrors,
            formValues: {
                ...contactForm.formValues,
                [name]: value
            }
        });
    };

    const hasErrors = !!(messageError?.length || titleError?.length);
    const fieldsTouched = !!(message?.length && title?.length);
    const isFormCorrect = fieldsTouched && !hasErrors;

    const handleSubmit: FormEventHandler<HTMLFormElement> = (evt) => {
        evt.preventDefault();
        if (isFormCorrect) {
            console.log(contactForm.formValues);
            setContactForm(initialForm);
        }
    }

    return <Row className="justify-content-md-center">
        <BreadcrumbComponent currentPage="Contact" />
        <Col xs='12' md='8'>
            <Form noValidate autoComplete="off" onSubmit={handleSubmit} className="text-center">
                <FloatingLabel
                    controlId="floatingInput"
                    label="Title"
                    className="mb-3"
                >
                    <Form.Control
                        name={FormFields.Title}
                        value={title}
                        onChange={handleChange}
                        type="text"
                        placeholder="name@example.com"
                        isInvalid={!!titleError?.length} />
                    <Form.Control.Feedback type="invalid">
                        Title should have from {fieldsMinLength} to {titleMaxLength} characters.
                    </Form.Control.Feedback>
                </FloatingLabel>
                <FloatingLabel controlId="floatingTextarea2" label="Write us a message">
                    <Form.Control
                        name={FormFields.Message}
                        value={message}
                        onChange={handleChange}
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ minHeight: '300px', maxHeight: '300px' }}
                        isInvalid={!!messageError?.length}
                    />
                    <Form.Control.Feedback type="invalid">
                        Message should have from {fieldsMinLength} to {messageMaxLength} characters.
                    </Form.Control.Feedback>
                </FloatingLabel>
                <Button size="lg" variant="primary" type="submit" className="mt-3" style={{ color: colors.white }} disabled={!isFormCorrect}>
                    Send
                </Button>
            </Form>
        </Col>
    </Row>
};

export default Contact;