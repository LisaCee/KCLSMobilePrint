import React, { Component } from "react";
// import ListOfLibraries from '/ListOfLibraries'
import { Container, Row, Col } from "reactstrap";

class LibraryDD extends Component {
  state = {
    libraries: ["Algona Pacific", "Auburn", "Muckleshoot"],
    selection: ""
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <h4>Select your Library</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <select>
                {this.state.libraries.map(library => (
                  <option>{library}</option>
                ))}
              </select>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default LibraryDD;
