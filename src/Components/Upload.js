import React from "react";
import { Button } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const Upload = () => {
    return (
        <div>
            <Container>
                <Card>
                    <CardTitle>Printer</CardTitle>
                    <i className="fas fa-file-alt fa-3x" />
                    <CardBody>
                        <CardText>
                            <div />
                        </CardText>
                    </CardBody>
                </Card>
            </Container>
        </div>
    );
};

export default Upload;
