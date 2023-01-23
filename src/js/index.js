//TUTORIAL DE FREECODECAMP- CURSO DE REACT (https://www.youtube.com/watch?v=6Jfk8ic3KVk&t=25553s)
//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import App from "./App.js";

//import your own components
import Home from "./component/tarea.jsx";

//render your react application
ReactDOM.render(<App />, document.querySelector("#app"));
