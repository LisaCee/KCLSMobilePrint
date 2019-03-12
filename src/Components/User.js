import React from "react";
import { Button } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Label,
    Input,
    FormText
} from "reactstrap";

const User = () => {
    return (
        <div>
            <Container>
                <Card>
                    <Row className="header">
                        <Col xs="2">
                            <i className="fas fa-user fa-3x" />
                        </Col>
                        <Col>
                            <h5>User Info</h5>
                        </Col>
                    </Row>
                    <CardBody>
                        <Row>
                            <Col>
                                <CardText>
                                    <Input />
                                    <Label>Email Address</Label>
                                    <FormText>
                                        You will sign in with this email address when you retrieve
                                        your prints.
                  </FormText>
                                </CardText>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Container>
        </div>
    );
};

export default User;
