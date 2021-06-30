import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

import { useAuth } from '../../../auth/useAuth';

const ProfilePicModal = ({ isOpen, close }) => {
    const [fileName, setFileName] = useState("Subir una imagen");
    const [selectedFile, setSelectedFile] = useState(null)

    const handleFileChange = (e) => {
        const [file] = e.target.files;

        const SIZE_50MB = 52_428_800;
        const isValidSize = file.size < SIZE_50MB;
        const isNameOfOneImageRegEx = /.(jpe?g|gif|png)$/i;
        const isValidType = isNameOfOneImageRegEx.test(file.name);

        if (!isValidSize) return toast.error("Imagen muy pesada, máximo 50MB");
        if (!isValidType) return toast.error("Sólo puedes subir imágenes");

        setFileName(file);

        const reader = new FileReader();
        reader.onloadend = () => {
            setSelectedFile(reader.result);
        }
        reader.readAsDataURL(file);
    }

    return (
        <Modal show={isOpen} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Cambiar mi foto de perfil
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.File
                        custom
                        label={fileName}
                        data-browse="Subir"
                        onChange={handleFileChange}
                        accept=".jpg, .jpeg, .gif, .png"
                    />
                    <img
                        classname="img-fluid mt-2"
                        src={selectedFile}
                        alt="profile-preview"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={close}>
                    Cancelar
                </Button>
                <Button variant="primary">
                    Actualizar imagen
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ProfilePicModal;
