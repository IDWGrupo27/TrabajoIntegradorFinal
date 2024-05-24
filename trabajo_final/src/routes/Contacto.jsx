import React from "react";
import { Link } from "react-router-dom";
import "../css/Contacto.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";
import { MensajeEnviado } from "./MensajeEnviado";

export const Contacto = () => {

    

    return (
        <main>
            <section className="contacto">
                <form action="submit">
                    <h1>FORMULARIO DE CONTACTO</h1>
                    <div className="input-group">
                        <label for="name" className="required">
                            Nombre:
                        </label>
                        <input
                            className="inpt"
                            type="text"
                            name="name"
                            placeholder="Nombre..."
                            required
                        />

                        <label for="last_name" className="required">
                            Apellido:
                        </label>
                        <input
                            className="inpt"
                            type="text"
                            name="last_name"
                            placeholder="Apellido..."
                            required
                        />

                        <label for="email" className="required">
                            Email:
                        </label>
                        <input
                            className="inpt"
                            type="email"
                            name="email"
                            placeholder="Email..."
                            required
                        />

                        <label for="message" className="required">
                            Mensaje:
                        </label>
                        <textarea
                            cols="30"
                            rows="5"
                            name="message"
                            required
                        ></textarea>
                    </div>

                    <Link className="btn" to={"/mensaje-enviado"}>
                        <FontAwesomeIcon icon={faShareFromSquare}/>&nbsp; Enviar
                    </Link>

                </form>
                
            </section>
        </main>
    );
};

export default Contacto;
