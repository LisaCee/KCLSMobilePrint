import React from "react";
import { Button } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const Printer = () => {
    return (
        <div>
            <Container>
                <Card>
                    <CardTitle>Printer</CardTitle>
                    <i className="fas fa-print fa-3x" />
                    <CardBody>
                        <CardText>
                            <div>
                                <input
                                    type="radio"
                                    id="huey"
                                    name="drone"
                                    value="huey"
                                    checked
                                />
                                <label for="huey">Black and White</label>
                            </div>

                            <div>
                                <input type="radio" id="huey" name="drone" value="huey" />
                                <label for="huey">Color</label>
                            </div>
                        </CardText>
                    </CardBody>
                </Card>
            </Container>
        </div>
    );
};

export default Printer;
