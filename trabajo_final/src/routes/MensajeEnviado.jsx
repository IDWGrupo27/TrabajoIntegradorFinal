import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/Contacto.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";


export const MensajeEnviado = () => {

    const mensaje = useLocation();
    const {nombre, apellido, email} = mensaje.state;

    return (
        <main>
            <section className="contacto">
                <div className="send">
                    <h1 className="mensaje">
                        <p>Hola <u>{nombre} {apellido}</u>. Hemos recibido su mensaje.</p>
                        <p>En breve responderemos las inquietudes a su dirección de email: <u>{email}</u></p>
                        <p>Gracias por contactarnos!!</p>
                    </h1>
                    <Link className="btn" to={"/"}>
                       <FontAwesomeIcon icon={faHome}/>
                    </Link>
                </div>
            </section>
        </main>
    );
};
