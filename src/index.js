import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const rootEl = document.getElementById("root");
//creating a root element //enabling concurrent mode
const root = ReactDOM.createRoot(rootEl);
root.render(<App />);

serviceWorker.unregister();
