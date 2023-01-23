//TUTORIAL DE FREECODECAMP- CURSO DE REACT (https://www.youtube.com/watch?v=6Jfk8ic3KVk&t=25553s)
import React from "react";
import { AiFillCloseSquare } from "react-icons/ai"; //importacion de react-icons. Primero hay que instalar: npm install react-icons --save en una nueva terminal



const Tarea = ({id, texto, completada, completarTarea,eliminarTarea}) => {  //en listaDeTareas pasamos los diferentes props de este componente
	
    return(
        <div className={completada ? "tarea-contenedor completada" : "tarea-contenedor"}>   {/* Operador ternario--si es verdad se asigna una clase, sino, se asigna otra*/}
            <div 
                className="tarea-texto" 
                onClick={() => completarTarea(id)}> {/* funcion anonima que llama a completarTarea, la cuel nos pasan como prop*.Recibe el id unico para saber cual es la tarea completada*/}
                {texto}                              {/* prop del texto, que se mandará a otro componente*/}
            </div>
            <div className="tarea-contenedor-icono" onClick={() => eliminarTarea(id)}> {/*Lo mismo que con completartarea*/}
                <AiFillCloseSquare className="tarea-icono"/> {/* Comentario: le asignamos la clase para dar forma al icono, aunque en realidad no es una clase, es un icono*/}
            </div>
        </div>
    );
};

export default Tarea;

