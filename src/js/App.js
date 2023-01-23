//TUTORIAL DE FREECODECAMP- CURSO DE REACT (https://www.youtube.com/watch?v=6Jfk8ic3KVk&t=25553s)
import React from "react";
import ListaDeTareas from "./component/listaDeTareas.jsx";


import "../styles/App.css";
import "../styles/Tarea.css"


function App(){
    return (
        <div className="aplicacion-tareas">
            <div className="tareas-lista-principal">
                <h1>Mis Tareas</h1>
                <ListaDeTareas/>
            </div>
        </div>
    )
}

export default App;