import Alert from 'react-bootstrap/Alert';
import { createPortal } from 'react-dom';
import { styled } from 'styled-components';

const ToastMessage = ({ show, setShow }: { show: boolean; setShow: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        show ? createPortal(
            <ToastContainer>
                <Alert variant="success" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>Success!</Alert.Heading>
                    <p>
                        Your data are updated successfully.
                    </p>
                </Alert>
            </ToastContainer>, document.body) : null
    );
}

const ToastContainer = styled.div`
    position: fixed;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    width: 80vw;
`;

export default ToastMessage;