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
                                <Col>
                                    <div>
                                        <input
                                            type="radio"
                                            id= "bw"
                                            name="bw"
                                            value="bw"
                                            checked
                                        />
                                        <label for="bw">Black and White</label>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <input type="radio" id="color" name="color" value="color" />
                                        <label for="color">Color</label>
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
