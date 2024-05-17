import React from "react";
import { Outlet, Link } from "react-router-dom";
import Hotel from "../components/Hotel";
import "../css/index.css";

export const Home = () => {
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
                        Buscar hoteles
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
                    <Hotel name="Hotel 1" imgSrc="../img/hotel.png"></Hotel>
                    <Hotel name="Hotel 2" imgSrc="../img/hotel.png"></Hotel>
                    <Hotel name="Hotel 3" imgSrc="../img/hotel.png"></Hotel>
                    <Hotel name="Hotel 4" imgSrc="../img/hotel.png"></Hotel>
                    <Hotel name="Hotel 5" imgSrc="../img/hotel.png"></Hotel>
                </div>
            </section>

            <section>
                <div className="Tipos-Aloja">
                    <h2>Tipos de Alojamiento</h2>
                    <div className="carta">
                        <h3>Hoteles</h3>
                        <p>
                            Experiencia única, arte, descanso y naturaleza.
                            Descubre el lujo y relax que te mereces. ¡Reserva
                            hoy! Promocion 2x1. Promociones todo el año.
                        </p>
                        <button type="submit">+ info</button>
                    </div>

                    <div className="carta">
                        <h3>Departamentos</h3>
                        <p>
                            Experiencia única, arte, descanso y naturaleza.
                            Descubre el lujo y relax que te mereces. ¡Reserva
                            hoy! Promocion 2x1. Promociones todo el año.
                        </p>

                        <button type="submit">+ info</button>
                    </div>

                    <div className="carta">
                        <h3>Cabañas</h3>
                        <p>
                            Experiencia única, arte, descanso y naturaleza.
                            Descubre el lujo y relax que te mereces. ¡Reserva
                            hoy! Promocion 2x1. Promociones todo el año.
                        </p>
                        <button type="submit">+ info</button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
