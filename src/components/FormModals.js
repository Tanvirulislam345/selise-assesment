import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import { Button } from '../styles/HomeStyled';

const FormModals = ({ name, handleSubmit, children }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <Button onClick={handleShow} Background={name === "Category" && "#FF5733 "}>{name}</Button>
            <Modal
                show={show}
                onHide={handleClose}

            >
                <Modal.Header closeButton>
                    <Modal.Title >{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        children
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                    <Button variant="secondary" onClick={() => {
                        handleSubmit();
                        handleClose();
                    }
                    }>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default FormModals;

