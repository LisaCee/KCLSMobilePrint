import React from "react";
import LibraryDD from "./LibraryDD";
import Instructions from "./Instructions";
import { Button } from "reactstrap";
import { Container, Row, Col } from "reactstrap";

const FrontPage = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1> KCLS Mobile Printing</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Instructions />
          </Col>
        </Row>
        <Row>
          <Col>
            <LibraryDD />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button>Next</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FrontPage;
