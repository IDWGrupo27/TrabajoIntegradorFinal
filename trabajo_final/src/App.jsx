import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./routes/Home";
import { Contacto } from "./routes/Contacto";
import { Institucional } from "./routes/Institucional";
import { MensajeEnviado } from "./routes/MensajeEnviado";
import { Administracion } from "./routes/Administracion";
import { AddAlojamiento } from "./components/AddAlojamiento";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faShareFromSquare,
    faSearch,
    faHome,
    faWifi,
    faBath,
    faTv,
    faKitchenSet,
    faCar,
    faPaw,
    faUmbrellaBeach,
    faPersonSwimming,
    faHouseMedical,
    faBed,
} from "@fortawesome/free-solid-svg-icons";

export const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/contacto" element={<Contacto />} />
                <Route
                    path="/informacion-institucional"
                    element={<Institucional />}
                />
                <Route path="/mensaje-enviado" element={<MensajeEnviado />} />
                <Route path="/administracion" element={<Administracion />} />
            </Routes>
            <Footer />
        </>
    );
};

library.add(faShareFromSquare, faSearch, faHome);
export default App;
