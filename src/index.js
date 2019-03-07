import React from "react";
import ReactDOM from "react-dom";
import FrontPage from "./Components/FrontPage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div className="App">
            <h1>KCLS Mobile Printing</h1>
            <FrontPage />
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
