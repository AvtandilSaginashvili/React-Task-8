import React from "react";
import ReactDOM from "react-dom/client";
import Array from "./Array";
import "./style.css";


class App extends React.Component {
    render() {
        return(

            <Array />
        )
    }
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);