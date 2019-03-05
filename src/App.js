import React, { Component } from "react";
import "./App.css";
import LibraryDD from "./Components/LibraryDD";
import { Container, Row, Col } from "reactstrap";
import Instructions from "./Components/Instructions";

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <h4>Mobile Printing Services</h4>
            </Col>
          </Row>
          <Row>
            <Instructions />
          </Row>
          <Row>
            <Col>
              <LibraryDD />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
