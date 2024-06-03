import React, { useState } from "react";
import "../css/Administracion.css";
import TablaTiposAlojamiento from "../components/TablaTiposAlojamiento";

export const Administracion = () => {
    return (
        <main className="administracion">
            <section>
                <h1>Administración</h1>
            </section>
            <section>
                <TablaTiposAlojamiento></TablaTiposAlojamiento>
            </section>
        </main>
    );
};

export default Administracion;
