import { faqContent } from "../assets/faqContent";
import BreadcrumbComponent from "../components/Breadcrumb";
import Accordion from 'react-bootstrap/Accordion';

const FAQs = () => (<>
    <BreadcrumbComponent currentPage="FAQs" />
    <Accordion>
        {faqContent.map(({ body, title }, index) => (
            <Accordion.Item key={index} eventKey={index.toString()}>
                <Accordion.Header>{title}</Accordion.Header>
                <Accordion.Body>
                    {body}
                </Accordion.Body>
            </Accordion.Item>
        ))}
    </Accordion>
</>);

export default FAQs;