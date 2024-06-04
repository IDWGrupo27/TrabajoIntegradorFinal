import React from 'react';
import { Routes, Route } from "react-router-dom";
import '../css/AddAlojamiento.css';


export const AddAlojamiento = () => {
  return (
    
    <main>
        <section className='add-form'>
         <h1>INGRESAR ALOJAMIENTO</h1>
            <div className='form-box'>
                
             <form action="" className='formulario'>
                 <label htmlFor="titulo">Titulo</label>
                 <input type="text" id='titulo' required/>

                 <label htmlFor="descripcion">Descripcion</label>
                 <input type="text" id='descripcion'required/>

                 <label htmlFor="tipo-alojamiento">Tipo de alojamiento</label>
                 <select name="" id="tipo-alojamiento" className='seleccionar-tipo'>
                    <option value="Hotel">Hotel</option>
                    <option value="Departamento">Departamento</option>
                    <option value="Cabaña">Cabaña</option>
                 </select>

                 <label htmlFor="latitud">Latitud</label>
                 <input type="text" id='latitud'required/>

                 <label htmlFor="longitud">Longitud</label>
                 <input type="text" id='longitud'required/>

                 <label htmlFor="precio">Precio por dia</label>
                 <input type="text" id='precio'required/>

                 <label htmlFor="dormitorios">Cantidad de dormitorios</label>
                 <input type="number" id='dormitorios'required/>

                 <label htmlFor="baños">Cantidad de baños</label>
                 <input type="number" id='baños'required/>

                 <button className='btn-form'>Enviar</button>

             </form>
            </div>
        </section>
    </main>
  )
}

export default AddAlojamiento
