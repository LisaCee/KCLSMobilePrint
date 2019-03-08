import React from "react";
import { Button } from "reactstrap";
import { Container, Row, Col } from "reactstrap";

const Print = () => {
  return (
    <div>
      <Container>
        <Row>
          <h6>Printer</h6>
        </Row>
        <Row>
          <div>
            <input type="radio" id="huey" name="drone" value="huey" checked />
            <label for="huey">Black and White</label>
          </div>
        </Row>
        <Row>
          <div>
            <input type="radio" id="huey" name="drone" value="huey" />
            <label for="huey">Color</label>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Print;
