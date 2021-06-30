import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

import { useAuth } from '../../../auth/useAuth';

const ProfilePicModal = ({ isOpen, close }) => {
    const [fileName, setFileName] = useState("Subir una imagen");
    const [selectedFile, setSelectedFile] = useState(null)

    const handleFileChange = (e) => {
        const [file] = e.target.files;
        setFileName(file.name)

        const reader = new FileReader();
        reader.onloadend(() => {
            // Image file in base64
            setSelectedFile(reader.result);
        });
        reader.readAsDataURL(file);
    }

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
                        data-browse="Subir"
                        onChange={handleFileChange}
                        accept=".jpg, .jpeg, .png, .gif"
                    />
                </Form>
                <h2>Previsualización de imagen</h2>
                <img
                    className="img-fluid"
                    src={selectedFile}
                    alt="profile-preview"
                />
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
