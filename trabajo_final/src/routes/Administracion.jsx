import React, { useState } from "react";
import "../css/Administracion.css";
import TablaTiposAlojamiento from "../components/TablaTiposAlojamiento";
import AddAlojamiento from "../components/AddAlojamiento";

export const Administracion = () => {
    return (
        <main className="administracion">
            <section>
                <h1>Administración</h1>
            </section>
            <section>
                <TablaTiposAlojamiento />
            </section>
            <section>
                <AddAlojamiento />
            </section>
        </main>
    );
};

export default Administracion;
