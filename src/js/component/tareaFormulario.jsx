//TUTORIAL DE FREECODECAMP- CURSO DE REACT (https://www.youtube.com/watch?v=6Jfk8ic3KVk&t=25553s)
import React,{useState} from 'react';
import"../../styles/TareaFormulario.css"
import { v4 as uuidv4 } from 'uuid'

const TareaFormulario = (props) =>{
    
    const [input, setInput] = useState('');

    const manejarCambio = e => {
        setInput(e.target.value);   //cogemos el valor del campo de texto
    }

    const manejarEnvio = e => {
        e.preventDefault();         //metodo que hace que no se vuelva a cargar toda la aplicacion cuando se envie el formulario
        
        const tareaNueva = {
            id: uuidv4() ,                   //paquete uuid-> npm install uuid. Permite crear id unicos
            texto:input,
            completada:false
        }
        props.onSubmit(tareaNueva);     // pasamos la tarea como argumento con el metodo de props, el cual recibe listadetareas
    }
    return(
        <form className='tarea-formulario' onSubmit={manejarEnvio}>
            <input className='tarea-input' type="text" placeholder='Escribe una tarea' name='texto' onChange={manejarCambio}/>
            <button className='tarea-boton'>Agregar Tarea</button>
        </form>
    )
}
export default TareaFormulario;