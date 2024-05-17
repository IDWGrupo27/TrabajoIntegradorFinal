import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./routes/Home";
import { Contacto } from "./routes/Contacto";
import { Institucional } from "./routes/Institucional";
import { MensajeEnviado } from "./routes/MensajeEnviado";

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
            </Routes>
            <Footer />
        </>
    );
};

export default App;
