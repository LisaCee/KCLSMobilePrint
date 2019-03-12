import React from "react";
import Printer from "./Printer";
import User from "./User";
import Upload from "./Upload";
import { Button, Container, Row, Col } from "reactstrap";

const Print = () => {
  return (
    <Container>
      <Printer />
      <User />
      <Upload />
      <Row>
        <Col xs={{offset: 2}}>
          <Button id="print_button">
            <i className="fas fa-print fa-3x" />
          </Button>
        </Col>
        <Col xs={ { offset: 2 } }>
          <Button id="cancel_button">
            <i className="fas fa-ban fa-3x" />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Print;
