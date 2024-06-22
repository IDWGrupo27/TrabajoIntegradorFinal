import React, { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import Hotel from "../components/Hotel";
import "../css/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons";

import { images } from "../img/all";

import { useApi } from "../services/ApiService";

export const Home = () => {
    const {
        listaAlojamientos,
        listaTiposAlojamiento,
        getTipoAlojamiento,
        errFetchAlojamientos,
    } = useApi();

    return (
        <main>
            <section className="info">
                <div>
                    <h1>Encontrá tu alojamiento en este sitio</h1>
                    <p>
                        Buscá hospedaje en el destino que deseas y compará
                        precios, puntuaciones.
                    </p>
                </div>
                <div className="search-avail">
                    <div>
                        <form
                            action="submit"
                            className="search-form"
                            id="search-form"
                        >
                            <div className="search-input-field">
                                <label htmlFor="destination">Destino</label>
                                <input
                                    type="text"
                                    placeholder="¿Adónde vas?"
                                    name="destination"
                                    required
                                />
                            </div>
                            <div className="search-input-field">
                                <label htmlFor="checkin-date">Check-in</label>
                                <input
                                    type="date"
                                    name="checkin-date"
                                    required
                                />
                            </div>
                            <div className="search-input-field">
                                <label htmlFor="checkout-date">Check-out</label>
                                <input
                                    type="date"
                                    name="checkout-date"
                                    required
                                />
                            </div>
                        </form>
                    </div>
                    <button type="submit" form="search-form">
                        <FontAwesomeIcon icon={faSearch} /> Buscar hoteles
                    </button>
                </div>
            </section>

            <section>
                <div className="hotels-controls">
                    <div className="col">
                        <button>Filtrar</button>
                    </div>
                    <div className="col" style={{ alignItems: "flex-end" }}>
                        <button>Ordenar ↑↓</button>
                    </div>
                </div>
                <div className="hotels">
                    {listaAlojamientos.length === 0 ? (
                        !errFetchAlojamientos ? (
                            <div className="loading">
                                <div>
                                    <span>Cargando...</span>
                                </div>
                                <FontAwesomeIcon
                                    size="2x"
                                    className="spinner"
                                    icon={faSpinner}
                                />
                            </div>
                        ) : (
                            <div className="loading">
                                <span>
                                    Error al obtener los alojamientos desde el
                                    servidor.
                                </span>
                            </div>
                        )
                    ) : (
                        listaAlojamientos.map((a) => <Hotel hotel={a} />)
                    )}
                </div>
            </section>
        </main>
    );
};

export default Home;
