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
                    <CardTitle>User Info</CardTitle>
                    <i className="fas fa-user fa-3x" />
                    <CardBody>
                        <CardText>
                            <Input />
                            <Label>Email Address</Label>
                            <FormText>
                                You will sign in with this email address when you retrieve your
                                prints.
              </FormText>
                        </CardText>
                    </CardBody>
                </Card>
            </Container>
        </div>
    );
};

export default User;
