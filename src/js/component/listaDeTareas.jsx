//TUTORIAL DE FREECODECAMP- CURSO DE REACT (https://www.youtube.com/watch?v=6Jfk8ic3KVk&t=25553s)
import React,{useState} from 'react';
import TareaFormulario from './tareaFormulario.jsx';
import "../../styles/ListaDeTareas.css"
import Tarea from './tarea.jsx';

const ListaDeTareas = () => {

    const [tareas, setTareas] = useState([]);               //Array vacío

    const agregarTarea = tarea =>{                          //pasamos esta funcion mediante onSubmit a tareaFormulario y este, a traves de los props, manda de nuevo aqui la tareaNueva
        if(tarea.texto.trim()){                             //comprobamos si la cadena no esta vacia quitando los espacios del principio o del final (.trim)
            tarea.texto = tarea.texto.trim();               //le quitamos los espacios innecesarios

            const tareasActualizadas =[tarea, ...tareas];   //añadimos al array la nueva tarea. Lo usamos así para añadirla al principio del array 
            setTareas(tareasActualizadas);                  //añadimos los nuevos valores al array del hook.
        }
    }

    const eliminarTarea = id => {                                         //funcion para eliminar una tarea, recibe el id para identificar
        const tareasActualizadas = tareas.filter(tarea =>tarea.id !==id); //filtramos el array por el id, que es unico
        setTareas(tareasActualizadas);                                    // y actualizamos el array del componente
    }

    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea =>{      //hacemos el map de tareas cogiendo cada tarea
            if(tarea.id === id){                            //si el id de la tarea que estamos procesando es igual al id que queremos marcar como completada o viceversa
                tarea.completada = !tarea.completada;       //pasamos a verdadero si es falso y viceversa
            }
            return tarea;                                   //devolvemos la tarea una vez marcamos si esta completada o no
        });
        setTareas(tareasActualizadas);                      //actualizamos el array
    }
    
    return(
        <>                                                  {/*Fragmentos vacíos, usados para no añadir mas divs o algun elemento principal mas*/}
            <TareaFormulario onSubmit ={agregarTarea}/>     {/*Pasamos un prop que se llama onSubmit, en tareaformulario/manejarenvio hay una funcion igual*/}
            <div className='tareas-lista-contenedor'>
                {
                    tareas.map((tarea) =>                   //recorre el array de tareas y hace lo que decimos a continuacion
                        <Tarea                              //crea un componente de React que será tomado como objeto
                            key={tarea.id}                  //necesario en react. tiene que ser unico.key no se pasa como un prop
                            id={tarea.id}                   //al no poder pasar key, tenemos que pasar id como algo que pueda ser un prop
                            texto={tarea.texto}             //el objeto tarea va a tener un texto
                            completada={tarea.completada}   //y un prop completada
                            completarTarea={completarTarea} //pasamos la funcion como prop
                            eliminarTarea = {eliminarTarea} //psamos la funcion como prop
                        />
                    )
                }
            </div>
        </>
    );
}

export default ListaDeTareas;