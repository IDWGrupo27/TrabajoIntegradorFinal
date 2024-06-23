import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "../css/AddAlojamiento.css";
import { useApi } from "../services/ApiService";

export const AddAlojamiento = () => {
    const { listaTiposAlojamiento, crearAlojamiento } = useApi();

    const [nuevoTitulo, setNuevoTitulo] = useState("");
    const [nuevaDescripcion, setNuevaDescripcion] = useState("");
    const [nuevaLatitud, setNuevaLatitud] = useState(0);
    const [nuevaLongitud, setNuevaLongitud] = useState(0);
    const [nuevoPrecioDia, setNuevoPrecioDia] = useState(0);
    const [nuevaCantidadDormitorios, setNuevaCantidadDormitorios] = useState(0);
    const [nuevaCantidadBanios, setNuevaCantidadBanios] = useState(0);
    const [nuevoEstado, setNuevoEstado] = useState(false);
    const [nuevoIdTipoAlojamiento, setNuevoIdTipoAlojamiento] = useState(null);

    const handleNuevoAlojamiento = () => {
        const nuevoAlojamiento = {
            Titulo: nuevoTitulo,
            Descripcion: nuevaDescripcion,
            Latitud: nuevaLatitud,
            Longitud: nuevaLongitud,
            PrecioPorDia: nuevoPrecioDia,
            CantidadDormitorios: nuevaCantidadDormitorios,
            CantidadBanios: nuevaCantidadBanios,
            Estado: "Reservado",
            TipoAlojamiento: nuevoIdTipoAlojamiento,
            idTipoAlojamiento: nuevoIdTipoAlojamiento,
        };
        crearAlojamiento(nuevoAlojamiento);
    };

    return (
        <div className="add-form">
            <h2>Cargar alojamiento</h2>
            <div className="form-box">
                <form action="" className="formulario">
                    <label htmlFor="titulo">Titulo</label>
                    <input
                        value={nuevoTitulo}
                        onChange={(e) => setNuevoTitulo(e.target.value)}
                        type="text"
                        id="titulo"
                        required
                    />

                    <label htmlFor="descripcion">Descripcion</label>
                    <input
                        value={nuevaDescripcion}
                        onChange={(e) => setNuevaDescripcion(e.target.value)}
                        type="text"
                        id="descripcion"
                        required
                    />

                    <label htmlFor="tipo-alojamiento">
                        Tipo de alojamiento
                    </label>
                    <select
                        defaultValue={"DEFAULT"}
                        onChange={(e) =>
                            setNuevoIdTipoAlojamiento(e.target.value)
                        }
                        className="seleccionar-tipo"
                        required
                    >
                        <option value={"DEFAULT"} disabled>
                            Sin elegir
                        </option>
                        {listaTiposAlojamiento.map((t) => (
                            <option
                                key={t.idTipoAlojamiento}
                                value={t.idTipoAlojamiento}
                            >
                                {t.Descripcion}
                            </option>
                        ))}
                    </select>

                    <label htmlFor="latitud">Latitud</label>
                    <input
                        value={nuevaLatitud}
                        onChange={(e) => setNuevaLatitud(e.target.value)}
                        type="text"
                        id="latitud"
                        required
                    />

                    <label htmlFor="longitud">Longitud</label>
                    <input
                        value={nuevaLongitud}
                        onChange={(e) => setNuevaLongitud(e.target.value)}
                        type="text"
                        id="longitud"
                        required
                    />

                    <label htmlFor="precio">Precio por dia</label>
                    <input
                        value={nuevoPrecioDia}
                        onChange={(e) => setNuevoPrecioDia(e.target.value)}
                        type="text"
                        id="precio"
                        required
                    />

                    <label htmlFor="dormitorios">Cantidad de dormitorios</label>
                    <input
                        value={nuevaCantidadDormitorios}
                        onChange={(e) =>
                            setNuevaCantidadDormitorios(e.target.value)
                        }
                        type="number"
                        id="dormitorios"
                        required
                    />

                    <label htmlFor="baños">Cantidad de baños</label>
                    <input
                        value={nuevaCantidadBanios}
                        onChange={(e) => setNuevaCantidadBanios(e.target.value)}
                        type="number"
                        id="baños"
                        required
                    />

                    <button
                        onClick={handleNuevoAlojamiento}
                        className="btn-form"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddAlojamiento;
