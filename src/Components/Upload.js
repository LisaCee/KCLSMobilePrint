import React from "react";
import { Button } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const Upload = () => {
    return (
        <div>
            <Container>
                <Card>
                    <Row className="header">
                        <Col xs="2">
                            <i className="fas fa-file-alt fa-3x" />
                        </Col>
                        <Col>
                            <h5>Upload</h5>
                        </Col>
                    </Row>
                    <CardBody>
                        <CardText>
                            <div id="file">
                                <input />
                                <input type="file" name="pic" accept="image/*" />
                                <input type="submit" />
                            </div>
                        </CardText>
                    </CardBody>
                </Card>
            </Container>
        </div>
    );
};

export default Upload;
