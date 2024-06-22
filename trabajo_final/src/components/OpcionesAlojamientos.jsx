import { useEffect, useState } from "react";

import { useApi } from "../services/ApiService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSpinner,
    faMinus,
    faPencil,
    faFloppyDisk,
    faCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

import "../css/OpcionesAlojamientos.css";

export const OpcionesAlojamientos = () => {
    const {
        listaAlojamientos,
        borrarAlojamiento,
        actualizarAlojamiento,
        actualizarTituloAlojamiento,
        listaServicios,
        listaAlojamientosServicios,
        actualizarAlojamientoServicios,
        errFetchAlojamientos,
    } = useApi();

    const [editNombreId, setEditNombreId] = useState(null);
    const [editNombre, setEditNombre] = useState("");

    // se va a usar una lista de alojamientos copiada de la que viene de la API, para poder manipularla desde acá
    // y que no afecte a la vista de la página principal hasta que se guarden los cambios
    const [nuevaListaAlojamientos, setNuevaListaAlojamientos] = useState([]);
    const [isListaCargada, setIsListaCargada] = useState(false);

    // esta función solo opera con la copia
    const isServiceInAlojamiento = (idServicio, idAlojamiento) => {
        const a = nuevaListaAlojamientos.find(
            (a) => a.idAlojamiento === idAlojamiento
        );
        if (a) {
            const s = a.servicios.find((s) => s.idServicio === idServicio);
            if (s) return true;
        }
        return false;
    };

    const handleBorrarAlojamiento = (id) => {
        let c = window.confirm(`Se borrará el alojamiento con ID ${id}`);
        if (c) {
            borrarAlojamiento(id);
        }
    };

    const handleActivateEditName = (id, nombre) => {
        if (editNombreId === id) {
            setEditNombreId(null);
            setEditNombre("");
        } else {
            setEditNombreId(id);
            setEditNombre(nombre);
        }
    };

    const handleSaveNewName = () => {
        let c = window.confirm(
            `Se cambiará el nombre del alojamiento con ID ${editNombreId} a ${editNombre}`
        );
        if (c) {
            if (editNombreId && editNombre != "") {
                actualizarTituloAlojamiento(editNombreId, editNombre);
                setEditNombreId(null);
                setEditNombre("");
            }
        }
    };

    const handleChangeAlojamientoServicios = (
        event,
        idAlojamiento,
        idServicio
    ) => {
        let nuevaLA = nuevaListaAlojamientos;
        let a = nuevaListaAlojamientos.find(
            (a) => a.idAlojamiento === idAlojamiento
        );
        let nuevaListaServicios = a.servicios;

        if (isServiceInAlojamiento(idServicio, idAlojamiento)) {
            nuevaListaServicios.splice(
                nuevaListaServicios.findIndex(
                    (s) => s.idServicio === idServicio
                ),
                1
            );
            a["servicios"] = nuevaListaServicios;
            event.target.className = "servicio-check";

            setNuevaListaAlojamientos(nuevaLA);
        } else {
            const s = listaServicios.find((s) => s.idServicio === idServicio);
            nuevaListaServicios.push(s);
            a["servicios"] = nuevaListaServicios;
            event.target.className = "servicio-check selected";

            setNuevaListaAlojamientos(nuevaLA);
        }
    };

    const handleSaveAlojamientoServicios = (id) => {
        let listaServicios = nuevaListaAlojamientos.find(
            (a) => a.idAlojamiento === id
        ).servicios;
        let c = window.confirm(
            "Se van a reemplazar los servicios actuales por los " +
                listaServicios.length +
                " seleccionados"
        );
        if (c) {
            actualizarAlojamientoServicios(id, listaServicios);
        }
    };

    const handleAlternarDisponible = (alojamiento) => {
        alojamiento.Estado === "Disponible"
            ? (alojamiento.Estado = "Reservado")
            : (alojamiento.Estado = "Disponible");
        actualizarAlojamiento(alojamiento);
    };

    // se ejecuta cuando se actualiza la información recibida de la BBDD
    useEffect(() => {
        setNuevaListaAlojamientos(listaAlojamientos);
        // se agregan los servicios dentro de cada alojamiento para hacer más sencilla su manipulación desde acá
        let nuevaL = [];
        for (let i = 0; i < listaAlojamientos.length; i++) {
            let a = listaAlojamientos[i];
            if (a) {
                a["servicios"] = [];
                for (let j = 0; j < listaServicios.length; j++) {
                    let s = listaServicios[j];
                    if (s) {
                        const match = listaAlojamientosServicios.find(
                            (as) =>
                                as.idServicio === s.idServicio &&
                                as.idAlojamiento === a.idAlojamiento
                        );
                        if (match) {
                            a["servicios"].push(s);
                        }
                    }
                }
                nuevaL.push(a);
            }
        }
        if (nuevaL.length > 0) {
            setNuevaListaAlojamientos(nuevaL);
            setIsListaCargada(true);
        }
    }, [listaAlojamientos, listaAlojamientosServicios]);

    return (
        <div className="tabla-opciones-alojamientos">
            <h2>Configuración de alojamientos</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Alojamiento</th>
                        <th>Servicios</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {!nuevaListaAlojamientos[0] ? (
                        <tr>
                            <td></td>
                            {!errFetchAlojamientos ? (
                                <td>
                                    Cargando...{" "}
                                    <FontAwesomeIcon
                                        className="spinner"
                                        icon={faSpinner}
                                    />
                                </td>
                            ) : (
                                <td>
                                    Error al recuperar los alojamientos desde el
                                    servidor.
                                </td>
                            )}
                            <td></td>
                        </tr>
                    ) : null}
                    {nuevaListaAlojamientos
                        ? nuevaListaAlojamientos.map((a) => (
                              <tr key={a.idAlojamiento}>
                                  <td>{a.idAlojamiento} </td>
                                  <td>
                                      {editNombreId !== a.idAlojamiento ? (
                                          <>
                                              <span
                                                  style={{ fontWeight: "bold" }}
                                              >
                                                  {a.Titulo}
                                              </span>{" "}
                                              <button
                                                  title="Editar"
                                                  onClick={() =>
                                                      handleActivateEditName(
                                                          a.idAlojamiento,
                                                          a.Titulo
                                                      )
                                                  }
                                              >
                                                  <FontAwesomeIcon
                                                      width={"13px"}
                                                      icon={faPencil}
                                                  />
                                              </button>
                                          </>
                                      ) : (
                                          <>
                                              <input
                                                  type="text"
                                                  value={editNombre}
                                                  onChange={(e) =>
                                                      setEditNombre(
                                                          e.target.value
                                                      )
                                                  }
                                              />
                                              <button
                                                  title="Cancelar"
                                                  onClick={() =>
                                                      handleActivateEditName(
                                                          a.idAlojamiento,
                                                          a.Titulo
                                                      )
                                                  }
                                              >
                                                  <FontAwesomeIcon
                                                      width={"20px"}
                                                      icon={faCircleLeft}
                                                  />
                                              </button>
                                              <button
                                                  onClick={handleSaveNewName}
                                                  title="Guardar cambios"
                                              >
                                                  <FontAwesomeIcon
                                                      width={"13px"}
                                                      icon={faFloppyDisk}
                                                  />
                                              </button>
                                          </>
                                      )}
                                  </td>
                                  {nuevaListaAlojamientos ? (
                                      <td className="servicios">
                                          <div
                                              onClick={() =>
                                                  handleAlternarDisponible(a)
                                              }
                                              className={
                                                  a.Estado === "Disponible"
                                                      ? "disponible-check disponible"
                                                      : "disponible-check"
                                              }
                                          >
                                              <span>
                                                  {a.Estado === "Disponible"
                                                      ? "Disponible"
                                                      : "Reservado"}
                                              </span>
                                          </div>
                                          {listaServicios
                                              ? listaServicios.map((s) => (
                                                    <div
                                                        key={
                                                            s.idServicio +
                                                            "-" +
                                                            a.idAlojamiento
                                                        }
                                                        onClick={(e) =>
                                                            handleChangeAlojamientoServicios(
                                                                e,
                                                                a.idAlojamiento,
                                                                s.idServicio
                                                            )
                                                        }
                                                        className={
                                                            isServiceInAlojamiento(
                                                                s.idServicio,
                                                                a.idAlojamiento
                                                            )
                                                                ? "servicio-check selected"
                                                                : "servicio-check"
                                                        }
                                                    >
                                                        <span>{s.Nombre}</span>
                                                    </div>
                                                ))
                                              : null}
                                      </td>
                                  ) : null}

                                  <td>
                                      <button
                                          title="Eliminar"
                                          onClick={() =>
                                              handleBorrarAlojamiento(
                                                  a.idAlojamiento
                                              )
                                          }
                                      >
                                          <FontAwesomeIcon
                                              width={"10px"}
                                              icon={faMinus}
                                          />
                                      </button>
                                      <button
                                          onClick={() =>
                                              handleSaveAlojamientoServicios(
                                                  a.idAlojamiento
                                              )
                                          }
                                          title="Guardar cambios"
                                      >
                                          <FontAwesomeIcon
                                              width={"13px"}
                                              icon={faFloppyDisk}
                                          />
                                      </button>
                                  </td>
                              </tr>
                          ))
                        : null}
                </tbody>
            </table>
        </div>
    );
};

export default OpcionesAlojamientos;
