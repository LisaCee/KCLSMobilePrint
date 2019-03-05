import React from "react";
import { Container, Row, Col } from "reactstrap";

const Instructions = () => {
  return (
    <div>
      <Container className="instructions">
        <Row>
          <Col xs="10">
            <ul>
              <li>
                You will need an active{" "}
                <a href="http://www.kcls.org">KCLS library card</a> to use this
                service.
              </li>
              <li>You must retrieve your print job within four hours.</li>
              <li>There is a 20MB file limit per upload.</li>
              <li>
                You can print up to 75 units per week. Learn more about printing{" "}
                <a href="https://kcls.org/news/computer-use-booking-printing-policy/">
                  here
                </a>
                .
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Instructions;
