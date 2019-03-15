import React from 'react';
import { Container, Row, Col } from "reactstrap";
import { Card, CardBody } from "reactstrap";

const PickUp = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card>
                             <Row className="header">
                        <Col xs="2">
                            <i className="fas fa-file-alt fa-3x" />
                        </Col>
                        <Col>
                            <h5>Status</h5>
                        </Col>
                    </Row>
                    <CardBody>
                        <p>Your request has been received.</p>
                    </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PickUp;