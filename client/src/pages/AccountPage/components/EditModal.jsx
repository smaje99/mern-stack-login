import React, { useEffect } from 'react';
import { Modal, Alert, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import { useAuth } from '../../../auth/useAuth';

import roles from '../../../helpers/roles'
import editAccountResolver from '../../../validations/editAccountResolver';

const EditModal = ({ user, isOpen, close }) => {
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors, dirtyFields }
    } = useForm({ resolver: editAccountResolver });

    const { updateUser, hasRole } = useAuth();

    const isDirty = !!Object.keys(dirtyFields).length;

    const onSubmit = (formData) => {
        if (!isDirty) return;

        if (!formData.role) {
            const { role, ...resFormData } = formData;
            formData = resFormData;
        }

        updateUser(formData);
        close();
    }

    useEffect(() => {
        if (!isOpen) {
            reset();
        }
    }, [isOpen, reset])

    useEffect(() => {
        reset(user ? {
            name: user.name,
            email: user.email,
            role: user.role
        } : {});
    }, [user, reset])

    return (
        <Modal show={isOpen} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Editar mi cuenta
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Escribe un nombre"
                            {...register("name")}
                        />
                        {(errors && errors.name) && (
                            <Form.Text>
                                <Alert variant="danger">
                                    {errors.name.message}
                                </Alert>
                            </Form.Text>
                        )}
                    </Form.Group>
                    <Form.Group className="mt-2">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Escribe un correo electrónico"
                            {...register("email")}
                        />
                        {(errors && errors.email) && (
                            <Form.Text>
                                <Alert variant="danger">
                                    {errors.email.message}
                                </Alert>
                            </Form.Text>
                        )}
                    </Form.Group>
                    <Form.Group className="mt-2">
                        <Form.Label>Rol</Form.Label>
                        <Form.Control
                            as="select"
                            disabled={!hasRole(roles.admin)}
                            {...register("role")}
                        >
                            {Object.values(roles).map(role => (
                                <option value={role} key={role}>{role}</option>
                            ))}
                        </Form.Control>
                        {(errors && errors.role) && (
                            <Form.Text>
                                <Alert variant="danger">
                                    {errors.role.message}
                                </Alert>
                            </Form.Text>
                        )}
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={close}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={handleSubmit(onSubmit)}>
                    Actualizar mi cuenta
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditModal;
