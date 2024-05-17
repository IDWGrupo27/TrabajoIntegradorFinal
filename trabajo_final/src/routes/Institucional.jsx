import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../css/Institucional.css";
import propuestasCabanas from "../img/propuestasCabañas.jpg";
import propuestasDepartamentos from "../img/propuestasDepartamentos.jpg";
import propuestasHoteles from "../img/propuestasHoteles.jpg";

export const Institucional = () => {
    return (
        <main className="main-info">
            <h2>¿Quienes somos?</h2>
            <section className="box-info">
                <p>
                    Somos una pagina de alojamientos y lo que buscamos es que
                    tengas la posibilidad de adquirir el lugar que tanto deseas
                    para hospedarte al mejor precio posible
                </p>
            </section>

            <h2>Nuestro objetivo</h2>
            <section className="box-info">
                <p>
                    Poder brindar la mejor atencion a todas aquellas personas
                    que quieran utilizar nuestros servicios, devolverles su
                    confianza con los mejores servicios
                </p>
            </section>

            <h2>Nuestras distintas propuestas</h2>
            <section className="box-propuestas">
                <div className="img-propuestas">
                    <p>Hoteles</p>
                    <img src={propuestasHoteles} alt="hoteles" />
                </div>
                <div className="img-propuestas">
                    <p>Departamentos</p>
                    <img src={propuestasDepartamentos} alt="departamentos" />
                </div>
                <div className="img-propuestas">
                    <p>Cabañas</p>
                    <img src={propuestasCabanas} alt="cabañas" />
                </div>
            </section>
        </main>
    );
};

export default Institucional;
