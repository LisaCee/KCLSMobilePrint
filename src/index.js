import React from "react";
import ReactDOM from "react-dom";
import FrontPage from "./Components/FrontPage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col} from 'reactstrap';

function App() {
    return (
      <div className="App">
        <Container>
          <h1>KCLS Mobile Printing</h1>
          <FrontPage />
        </Container>
      </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
