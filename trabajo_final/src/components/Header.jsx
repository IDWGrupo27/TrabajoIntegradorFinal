import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Logo from "../img/logo.png";
import "../css/Header.css";

export const Header = () => {
    const pantallaChica = useMediaQuery({ query: "(max-width: 1000px)" });

    return (
        <header>
            <div>
                <Link to={"/"}>
                    <div className="logo">
                        <img src={Logo} alt="IDW alojamiento" height="40" />
                        <span>IDW alojamiento</span>
                    </div>
                </Link>
            </div>

            {pantallaChica ? (
                <button>
                    <FontAwesomeIcon size="3x" icon={faBars} />
                </button>
            ) : (
                <div className="header-menu">
                    <Link className="menu-item" to={"/contacto"}>
                        <span>Contacto</span>
                    </Link>
                    <Link
                        className="menu-item"
                        to={"/informacion-institucional"}
                    >
                        <span>Información</span>
                    </Link>
                    <Link className="menu-item" to={"/administracion"}>
                        <span>Administración</span>
                    </Link>
                </div>
            )}

            {pantallaChica ? null : (
                <div className="phone-number">
                    <span>Para venta telefónica</span>
                    <span className="number">0800-999-1234</span>
                </div>
            )}
        </header>
    );
};

export default Header;
