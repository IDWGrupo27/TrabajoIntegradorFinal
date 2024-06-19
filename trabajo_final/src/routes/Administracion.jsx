import React, { useState } from "react";
import "../css/Administracion.css";
import TablaTiposAlojamiento from "../components/TablaTiposAlojamiento";
import AddAlojamiento from "../components/AddAlojamiento";
import TablaServicios from "../components/TablaServicios";
import OpcionesAlojamientos from "../components/OpcionesAlojamientos";

export const Administracion = () => {
    return (
        <main className="administracion">
            <section className="flex col">
                <h1>Administración</h1>
                <p>
                    Desde esta sección, se podrá cargar nuevos servicios,
                    alojamientos y tipos de alojamientos, así como su
                    medificación y eliminación de ser necesario.
                </p>
            </section>
            <section>
                <TablaTiposAlojamiento />
                <TablaServicios />
            </section>
            <section>
                <OpcionesAlojamientos />
            </section>
            <section>
                <AddAlojamiento />
            </section>
        </main>
    );
};

export default Administracion;
