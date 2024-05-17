import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";

export const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <p>&copy; IDW 2024. Todos los derechos resevados.</p>
                <div>
                    <Link to={"/contacto"}>Contacto</Link> | 
                    <Link to={"/informacion-institucional"}>
                        Información institucional
                    </Link>
                     | 
                    <Link to={"/informacion-institucional"}>Privacidad</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
