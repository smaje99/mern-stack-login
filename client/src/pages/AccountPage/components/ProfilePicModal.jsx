import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

import { useAuth } from '../../../auth/useAuth';

const ProfilePicModal = ({ isOpen, close }) => {
    const [fileName, setFileName] = useState("Subir una imagen");

    return (
        <Modal open={isOpen}>
            <Modal.Header>
                <Modal.Title>Cambiar mi foto de perfil</Modal.Title>

            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.File
                        custom
                        label={fileName}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={close}>
                    Cancelar
                </Button>
                <Button variant="primary">
                    Actualizar mi imagen
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ProfilePicModal;
