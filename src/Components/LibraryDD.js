import React, { Component } from "react";
// import ListOfLibraries from '/ListOfLibraries'
import {Container, Row, Col} from 'reactstrap';

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
        <h5>Select your Library</h5>
        </Row>
        <Row>
        <select>
          {this.state.libraries.map(library => (
            <option>{library}</option>
          ))}
        </select>
        </Row>
        </Container>
      </div>
    );
  }
}

export default LibraryDD;
