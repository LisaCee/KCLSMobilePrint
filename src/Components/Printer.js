import React from "react";
import { Button } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const Printer = () => {
    return (
        <div>
            <Container>
                <Card>
                    <Row className="header">
                        <Col xs="2">
                            <i className="fas fa-print fa-3x" />
                        </Col>
                        <Col>
                            <h5>Printer</h5>
                        </Col>
                    </Row>
                    <CardBody>
                        <CardText>
                            <Row>
                                <Col xs="6" lg="6">
                                    <div>
                                        <label class="radio-inline" for="bw">
                                            <input
                                                type="radio"
                                                className="radio"
                                                id="bw"
                                                name="bw"
                                                value="bw"
                                                checked
                                            />
                                            Black and White
                    </label>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <label class="radio-inline" for="color">
                                            <input
                                                type="radio"
                                                className="radio"
                                                id="color"
                                                name="color"
                                                value="color"
                                                checked
                                            />
                                            Color
                    </label>
                                    </div>
                                </Col>
                            </Row>
                        </CardText>
                    </CardBody>
                </Card>
            </Container>
        </div>
    );
};

export default Printer;
