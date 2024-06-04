import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";
import "../css/Header.css";

export const Header = () => {
    return (
        <header>
            <div>
                <Link to={"/"}>
                    <div className="logo">
                        <img src={Logo} alt="IDW alojamiento" height="40" />
                        <h3>IDW alojamiento</h3>
                    </div>
                </Link>
            </div>

            <div className="header-menu">
                <Link className="menu-item" to={"/contacto"}>
                    <span>Contacto</span>
                </Link>
                <Link className="menu-item" to={"/informacion-institucional"}>
                    <span>Información</span>
                </Link>
                <Link className="menu-item" to={"/administracion"}>
                    <span>Administración</span>
                </Link>
            </div>

            <div className="phone-number">
                <span>Para venta telefónica</span>
                <span className="number">0800-999-1234</span>
            </div>
        </header>
    );
};

export default Header;
