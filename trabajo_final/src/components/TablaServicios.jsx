import { useApi } from "../services/ApiService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSpinner,
    faMinus,
    faPencil,
    faFloppyDisk,
} from "@fortawesome/free-solid-svg-icons";
import "../css/TablaSimple.css";

import { useEffect, useState } from "react";

export const TablaServicios = () => {
    const {
        listaServicios,
        crearServicio,
        borrarServicio,
        editarServicio,
        errFetchServicios,
    } = useApi();

    const [nuevoServicio, setNuevoServicio] = useState("");

    const [editId, setEditId] = useState(null);
    const [editNombre, setEditNombre] = useState("");

    const handleActivateEdit = (id, nombre) => {
        if (editId === id) {
            setEditId(null);
            setEditNombre("");
        } else {
            setEditId(id);
            setEditNombre(nombre);
        }
    };

    const handleCrearServicio = () => {
        if (nuevoServicio === "") {
            alert("Ingrese un nombre para el nuevo servicio");
            return;
        }
        crearServicio(nuevoServicio);
        setNuevoServicio("");
    };

    const handleBorrarServicio = (id) => {
        let c = window.confirm(
            "Se borrará el servicio de alojamiento con ID " + id
        );
        if (c) {
            borrarServicio(id);
        }
    };

    const handleEditarServicio = () => {
        editarServicio(editId, editNombre);
        setEditId(null);
        setEditNombre("");
    };

    return (
        <div className="tabla-simple">
            <h2>Servicios</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Servicio</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {listaServicios.length === 0 ? (
                        <tr>
                            <td></td>
                            {!errFetchServicios ? (
                                <td>
                                    Cargando...{" "}
                                    <FontAwesomeIcon
                                        className="spinner"
                                        icon={faSpinner}
                                    />
                                </td>
                            ) : (
                                <td>
                                    Error al recuperar los servicios desde el
                                    servidor.
                                </td>
                            )}

                            <td></td>
                        </tr>
                    ) : null}
                    {listaServicios
                        ? listaServicios.map((servicio) => (
                              <tr key={servicio.idServicio}>
                                  <td>{servicio.idServicio}</td>
                                  {editId !== servicio.idServicio ? (
                                      <td>{servicio.Nombre}</td>
                                  ) : (
                                      <td>
                                          <input
                                              value={editNombre}
                                              onChange={(e) => {
                                                  setEditNombre(e.target.value);
                                              }}
                                          />
                                      </td>
                                  )}
                                  <td>
                                      <button
                                          title="Eliminar"
                                          onClick={() =>
                                              handleBorrarServicio(
                                                  servicio.idServicio
                                              )
                                          }
                                      >
                                          <FontAwesomeIcon
                                              width={"10px"}
                                              icon={faMinus}
                                          />
                                      </button>
                                      <button
                                          title="Editar"
                                          onClick={() =>
                                              handleActivateEdit(
                                                  servicio.idServicio,
                                                  servicio.Nombre
                                              )
                                          }
                                      >
                                          <FontAwesomeIcon
                                              width={"13px"}
                                              icon={faPencil}
                                          />
                                      </button>

                                      <button
                                          title="Guardar cambios"
                                          disabled={
                                              editId !== servicio.idServicio
                                          }
                                          onClick={() => handleEditarServicio()}
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
                    <tr>
                        <td>Nuevo</td>
                        <td>
                            <input
                                value={nuevoServicio}
                                onChange={(e) => {
                                    setNuevoServicio(e.target.value);
                                }}
                                type="text"
                            />
                        </td>
                        <td>
                            <button title="Crear" onClick={handleCrearServicio}>
                                <FontAwesomeIcon
                                    width={"13px"}
                                    icon={faFloppyDisk}
                                />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TablaServicios;
