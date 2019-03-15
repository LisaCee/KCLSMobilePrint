import React from "react";
import ReactDOM from "react-dom";
import FrontPage from "./Components/FrontPage";
import Print from "./Components/Print";
import PickUp from "./Components/PickUp";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path = "/" component={FrontPage}/>
      <Route path="/print" component={Print}/>
      <Route path="/pickup" component={PickUp} />
    </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
