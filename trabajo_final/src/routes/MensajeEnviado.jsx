import React from "react";
import { Link } from "react-router-dom";
import "../css/Contacto.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export const MensajeEnviado = () => {
    return (
        <main>
            <section class="contacto">
                <div class="send">
                    <h1 class="mensaje">
                        <p>Hemos recibido su mensaje.</p>

                        <p>Nos contactaremos a la brevedad!</p>

                        <p>Gracias!!</p>
                    </h1>
                    <Link class="btn" to={"/"}>
                       <FontAwesomeIcon icon={faHome}/>
                    </Link>
                </div>
            </section>
        </main>
    );
};
