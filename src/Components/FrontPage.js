import React from "react";
import LibraryDD from "./LibraryDD";
import Instructions from "./Instructions";
import Print from "./Print"
import { Button } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

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
          <Link to ={"/print"}>
            <Button id="next">Next</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FrontPage;
