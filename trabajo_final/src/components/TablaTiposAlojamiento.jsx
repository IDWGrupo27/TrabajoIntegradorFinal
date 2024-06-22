import { useApi } from "../services/ApiService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSpinner,
    faMinus,
    faPencil,
    faFloppyDisk,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export const TablaTiposAlojamiento = () => {
    const {
        listaTiposAlojamiento,
        crearTipoAlojamiento,
        borrarTipoAlojamiento,
        editarTipoAlojamiento,
        errFetchTiposAlojamiento,
    } = useApi();

    const [nuevoTipoAlojamiento, setNuevoTipoAlojamiento] = useState("");

    const [editId, setEditId] = useState(null);
    const [editDescription, setEditDescription] = useState("");

    const handleActivateEdit = (id, description) => {
        if (editId === id) {
            setEditId(null);
            setEditDescription("");
        } else {
            setEditId(id);
            setEditDescription(description);
        }
    };

    const handleCrearTipoAlojamiento = () => {
        if (nuevoTipoAlojamiento === "") {
            alert("Ingresa un nombre para el nuevo tipo de alojamiento");
            return;
        }
        crearTipoAlojamiento(nuevoTipoAlojamiento);
        setNuevoTipoAlojamiento("");
    };

    const handleBorrarTipoAlojamiento = (id) => {
        let c = window.confirm(
            "Se borrará el tipo de alojamiento con ID " + id
        );
        if (c) {
            borrarTipoAlojamiento(id);
        }
    };

    const handleEditarTipoAlojamiento = () => {
        editarTipoAlojamiento(editId, editDescription);
        setEditId(null);
        setEditDescription("");
    };

    return (
        <div className="tabla-simple">
            <h2>Tipos de alojamiento</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Tipo</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {listaTiposAlojamiento.length === 0 ? (
                        <tr>
                            <td></td>
                            {!errFetchTiposAlojamiento ? (
                                <td>
                                    Cargando...{" "}
                                    <FontAwesomeIcon
                                        className="spinner"
                                        icon={faSpinner}
                                    />
                                </td>
                            ) : (
                                <td>
                                    Error al recuperar los tipos de alojamiento
                                    desde el servidor.
                                </td>
                            )}
                            <td></td>
                        </tr>
                    ) : null}
                    {listaTiposAlojamiento
                        ? listaTiposAlojamiento.map((tipoAlojamiento) => (
                              <tr key={tipoAlojamiento.idTipoAlojamiento}>
                                  <td>{tipoAlojamiento.idTipoAlojamiento}</td>
                                  {editId !==
                                  tipoAlojamiento.idTipoAlojamiento ? (
                                      <td>{tipoAlojamiento.Descripcion}</td>
                                  ) : (
                                      <td>
                                          <input
                                              value={editDescription}
                                              onChange={(e) => {
                                                  setEditDescription(
                                                      e.target.value
                                                  );
                                              }}
                                          />
                                      </td>
                                  )}
                                  <td>
                                      <button
                                          title="Eliminar"
                                          onClick={() =>
                                              handleBorrarTipoAlojamiento(
                                                  tipoAlojamiento.idTipoAlojamiento
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
                                                  tipoAlojamiento.idTipoAlojamiento,
                                                  tipoAlojamiento.Descripcion
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
                                              editId !==
                                              tipoAlojamiento.idTipoAlojamiento
                                          }
                                          onClick={() =>
                                              handleEditarTipoAlojamiento()
                                          }
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
                                value={nuevoTipoAlojamiento}
                                onChange={(e) => {
                                    setNuevoTipoAlojamiento(e.target.value);
                                }}
                                type="text"
                            />
                        </td>
                        <td>
                            <button
                                title="Crear"
                                onClick={handleCrearTipoAlojamiento}
                            >
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

export default TablaTiposAlojamiento;
