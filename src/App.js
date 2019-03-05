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
            <h1>Mobile Printing Services</h1>
          </Row>
          <Row>
            <LibraryDD />
          </Row>
          <Row>
            <Instructions />
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
