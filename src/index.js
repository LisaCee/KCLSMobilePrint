import React from "react";
import ReactDOM from "react-dom";
import FrontPage from "./Components/FrontPage";
import Print from "./Components/Print";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <FrontPage />
      <Print />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
