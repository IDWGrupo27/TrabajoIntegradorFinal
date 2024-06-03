import React from "react";
import { Outlet, Link } from "react-router-dom";
import Hotel from "../components/Hotel";
import "../css/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import { hotel } from "../img/images_hotel";
import { cabana } from "../img/images_cabana";
import { casa_campo } from "../img/images_casa_campo";
import { albergue } from "../img/images_albergue";
import { dptos } from "../img/images_dptos";
import { casa_huesped } from "../img/images_casa_huesped";

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
                        <FontAwesomeIcon icon={faSearch}/> Buscar hoteles
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
                    <Hotel name="Apart Hotel Carilo" imgSrc={hotel} tipo="Hotel" 
                        wifi="Conexión Internet" dormitorios="2 dormitorios" 
                        mascotas="Se permiten mascotas" piscina="Acceso a piscina" 
                        puntuacion="4,5" disponible={true}></Hotel>
                    <Hotel name="Cabaña playa" imgSrc={cabana} tipo="Cabaña" 
                        wifi="Conexión Internet" dormitorios="1 dormitorio" 
                        mascotas="Se permiten mascotas" piscina="Acceso a piscina" 
                        puntuacion="3,5" disponible={true}></Hotel>
                    <Hotel name="Casa Huesped La Caldera" imgSrc={casa_huesped} tipo="Casa Huesped" 
                        wifi="Conexión Internet" dormitorios="2 dormitorios" 
                        mascotas="Se permiten mascotas" piscina="No posee" 
                        puntuacion="4,0" disponible={false}></Hotel>
                    <Hotel name="Albergue Turístico" imgSrc={albergue} tipo="Albergue" 
                        wifi="Conexión Internet" dormitorios="2 dormitorios" 
                        mascotas="No se permiten mascotas" piscina="No posee" 
                        puntuacion="4,0" disponible={true}></Hotel>
                    <Hotel name="Casa campo Salta" imgSrc={casa_campo} tipo="Casa de Campo" 
                        wifi="Sin conexión a internet" dormitorios="3 dormitorios" 
                        mascotas="Se permiten mascotas" piscina="Acceso a piscina" 
                        puntuacion="5,0" disponible={false}></Hotel>
                    <Hotel name="Departamentos Galería Entre Rios" imgSrc={dptos} tipo="Departamento" 
                        wifi="Conexión Internet" dormitorios="2 dormitorios" 
                        mascotas="No se permiten mascotas" piscina="No posee" 
                        puntuacion="3,5" disponible={true}></Hotel>
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
                            hoy! Promoción 2x1. Promociones todo el año.
                        </p>
                        <button type="submit">+ info</button>
                    </div>

                    <div className="carta">
                        <h3>Departamentos</h3>
                        <p>
                            Experiencia única, arte, descanso y naturaleza.
                            Descubre el lujo y relax que te mereces. ¡Reserva
                            hoy! Promoción 2x1. Promociones todo el año.
                        </p>

                        <button type="submit">+ info</button>
                    </div>

                    <div className="carta">
                        <h3>Cabañas</h3>
                        <p>
                            Experiencia única, arte, descanso y naturaleza.
                            Descubre el lujo y relax que te mereces. ¡Reserva
                            hoy! Promoción 2x1. Promociones todo el año.
                        </p>
                        <button type="submit">+ info</button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
