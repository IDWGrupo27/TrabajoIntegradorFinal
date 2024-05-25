import React from "react";
import "../css/Contacto.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'


export const Contacto = () => {

    const [mensaje, setMensaje] = useState({
        nombre:"",
        apellido:"",
        email:"",
    });

    const navigate = useNavigate();

    const toNavigate = () => {
        navigate(
            "/mensaje-enviado",
            {state:{
                nombre:mensaje.nombre, 
                apellido:mensaje.apellido, 
                email:mensaje.email}
            }
        );
    };
    
    return (
        <main>
            <section className="contacto">

                <form action="submit" onSubmit={toNavigate}>

                    <h1>FORMULARIO DE CONTACTO</h1>

                    <div className="input-group">
                        <label htmlFor="name" className="required">
                            Nombre:
                        </label>
                        <input
                            id="name"
                            className="inpt"
                            type="text"
                            name="name"
                            placeholder="Nombre..."
                            onChange={(e) => setMensaje({ ...mensaje, nombre: e.target.value})}
                            required
                        />

                        <label htmlFor="last_name" className="required">
                            Apellido:
                        </label>
                        <input
                            id="last_name"
                            className="inpt"
                            type="text"
                            name="last_name"
                            placeholder="Apellido..."
                            onChange={(e) => setMensaje({ ...mensaje, apellido: e.target.value})}
                            required
                        />

                        <label htmlFor="email" className="required">
                            Email:
                        </label>
                        <input
                            id="email"
                            className="inpt"
                            type="email"
                            name="email"
                            placeholder="Email..."
                            onChange={(e) => setMensaje({ ...mensaje, email: e.target.value})}
                            required
                        />

                        <label htmlFor="message" className="required">
                            Mensaje:
                        </label>
                        <textarea
                            id="message"
                            cols="30"
                            rows="5"
                            name="message"
                            required
                        ></textarea>
                    </div>

                    <button className="btn"><FontAwesomeIcon icon={faShareFromSquare}/>
                        &nbsp; Enviar
                    </button>
                
                </form>
                
            </section>
        </main>
    );
};

export default Contacto;
