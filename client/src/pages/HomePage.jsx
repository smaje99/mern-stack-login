import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import routes from '../helpers/routes'

export const HomePage = () => {
    return (
        <Container>
            <Row className="mt-5">
                <Col xs={{ span: 12 }} md={{ span: 6 }} className="mb-5">
                    <h2>Bienvenido a Gestor de tareas</h2>
                    <p>¡Aquí podrás gestionar tus proyectos!</p>
                    <p>
                        Marca tus tareas terminadas, agrega, elimina o actualiza.
                    </p>
                    <div>
                        <Link to={routes.login}>
                            Ingresa
                        </Link>
                        <span> o </span>
                        <Button as={Link} to={routes.register} className="ml-1">
                            crea una cuenta
                        </Button>
                    </div>
                </Col>
                <Col>
                    <img
                        className="img-fluid"
                        src="img/task-manager.svg"
                        alt="gestor de tareas"
                    />
                    <p className="text-center" style={{ 'font-size': '26px' }}>
                        ¡Gestiona tu tiempo, mejora tu productividad!
                    </p>
                </Col>
            </Row>
        </Container>
    );
}
