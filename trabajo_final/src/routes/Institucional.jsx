import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../css/Institucional.css";
import propuestasCabanas from "../img/images/propuestasCabañas.jpg";
import propuestasDepartamentos from "../img/images/propuestasDepartamentos.jpg";
import propuestasHoteles from "../img/images/propuestasHoteles.jpg";
import imagenTitulo from "../img/images/imagenTitulo.jpeg";

export const Institucional = () => {
    return (
        <main className="main-info">
            <section className="box-titulo">
                <div className="content-box">
                    <h1>INFORMACION INSITUCIONAL</h1>
                    <img src={imagenTitulo} alt="Titulo" />
                </div>
            </section>

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
                    confianza con los mejores alojamientos
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

            <div className="box-registrar">
                <h2>¿Te interesaria registrar tu alojamiento?</h2>
                <section className="box-info">
                    <p>
                        Hace click en este boton para poder ponerte en contacto
                        con nosotros y asi poder registrar tu lugar en nuestro
                        sitio
                    </p>
                    <Link to={"/contacto"}>
                        <button className="btn-registrar">CLICK AQUI</button>
                    </Link>
                </section>
            </div>
        </main>
    );
};

export default Institucional;
