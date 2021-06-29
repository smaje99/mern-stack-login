import React from 'react';
import { Modal, Alert, Button } from 'react-bootstrap';

import { useAuth } from '../../../auth/useAuth';

const DeleteModal = ({ isOpen, close }) => {
    const { logout } = useAuth();

    const handleDelete = () => {
        // petición http
        // close()
        logout();
    }

    return (
        <Modal show={isOpen} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Eliminar cuenta
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Alert variant="danger">
                    ¿Estás seguro que deseas eliminar permanentemente tu cuenta?
                    <b>se perderán tus datos</b>
                </Alert>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={close}>
                    Cancelar
                </Button>
                <Button variant="danger" onClick={handleDelete}>
                    Eliminar mi cuenta
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DeleteModal;
