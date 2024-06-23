import { createContext, useContext, useEffect, useState } from "react";
export const ApiServiceContext = createContext();

export const ApiService = ({ children }) => {
    const APIURL = "http://localhost:3001/";

    const [listaAlojamientos, setListaAlojamientos] = useState([]);
    const [listaTiposAlojamiento, setListaTiposAlojamiento] = useState([]);
    const [listaServicios, setListaServicios] = useState([]);
    const [listaAlojamientosServicios, setListaAlojamientosServicios] =
        useState([]);

    const [errFetchAlojamientos, setErrFetchAlojamientos] = useState(false);
    const [errFetchTiposAlojamiento, setErrFetchTiposAlojamiento] =
        useState(false);
    const [errFetchServicios, setErrFetchServicios] = useState(false);
    const [errFetchAlojamientosServicios, setErrFetchAlojamientosServicios] =
        useState(false);

    /// ******************* Relaciones servicio-alojamiento ******************* ///
    const fetchAlojamientosServivios = () => {
        fetch(APIURL + "alojamientosServicios/getAllAlojamientoServicios")
            .then((res) => res.json())
            .then((data) => {
                setListaAlojamientosServicios(data);
            })
            .catch((error) => {
                setErrFetchAlojamientosServicios(true);
                console.log("Error al obtener los servicios de alojamientos.");
            });
    };

    const actualizarAlojamientoServicios = async (
        idAlojamiento,
        listaServicios
    ) => {
        // Primero se borran de la base de datos las relaciones alojamiento-servicio que ya no serán
        let alojamientoServiciosABorrar = [];
        for (let i = 0; i < listaAlojamientosServicios.length; i++) {
            if (listaAlojamientosServicios[i].idAlojamiento === idAlojamiento) {
                alojamientoServiciosABorrar.push(listaAlojamientosServicios[i]);
            }
        }
        const promises = alojamientoServiciosABorrar.map(
            async (alojamientoServicio) => {
                const response = await fetch(
                    APIURL +
                        "alojamientosServicios/deleteAlojamientoServicio/" +
                        alojamientoServicio.idAlojamientoServicio,
                    {
                        method: "DELETE",
                    }
                );
                return response.json();
            }
        );
        // Si se borraron correctamente, se procede a cargar los nuevos
        try {
            await Promise.all(promises);
            // Se cargan los nuevos
            for (let i = 0; i < listaServicios.length; i++) {
                let nuevoAS = {
                    idAlojamiento: idAlojamiento,
                    idServicio: listaServicios[i].idServicio,
                };
                console.log(nuevoAS);
                fetch(
                    APIURL + "alojamientosServicios/createAlojamientoServicio",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(nuevoAS),
                    }
                ).then((response) => {
                    if (response.ok) {
                        fetchAlojamientosServivios();
                    }
                });
            }
        } catch (error) {
            console.error("Error al borrar los alojamiento-servicios: ", error);
        }
        for (let i = 0; i < alojamientoServiciosABorrar.length; i++) {
            fetch(
                APIURL +
                    "alojamientosServicios/deleteAlojamientoServicio/" +
                    alojamientoServiciosABorrar[i].idAlojamientoServicio,
                {
                    method: "DELETE",
                }
            );
        }
    };

    // ************ Alojamientos ************
    const fetchAlojamientos = () => {
        fetch(APIURL + "alojamiento/getAlojamientos")
            .then((response) => response.json())
            .then((response) => {
                setListaAlojamientos(response);
            })
            .catch((error) => {
                setErrFetchAlojamientos(true);
                console.log("Error al obtener alojamientos.");
            });
    };

    const crearAlojamiento = (alojamiento) => {
        try {
            fetch(APIURL + "alojamiento/createAlojamiento", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(alojamiento),
            }).then((res) => {
                if (res.ok) {
                    fetchAlojamientos();
                }
            });
        } catch (error) {
            console.log("Error al crear un nuevo alojamiento.");
        }
    };

    const actualizarTituloAlojamiento = (id, titulo) => {
        let alojamiento = structuredClone(
            listaAlojamientos.find((a) => a.idAlojamiento === id)
        );
        delete alojamiento["servicios"];
        delete alojamiento["idAlojamiento"];
        if (alojamiento) {
            alojamiento.Titulo = titulo;
            try {
                fetch(`${APIURL}alojamiento/putAlojamiento/${id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(alojamiento),
                }).then((res) => {
                    if (res.ok) {
                        fetchAlojamientos();
                    }
                });
            } catch (error) {
                console.log("Error al actualizar el titulo del alojamiento.");
            }
        }
    };

    const actualizarAlojamiento = (alojamiento) => {
        let a = structuredClone(alojamiento);
        delete a["servicios"];
        try {
            fetch(`${APIURL}alojamiento/putAlojamiento/${a.idAlojamiento}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(a),
            }).then((res) => {
                if (res.ok) {
                    fetchAlojamientos();
                }
            });
        } catch (error) {
            console.log("Error al actualizar el titulo del alojamiento.");
        }
    };

    const borrarAlojamiento = (idAlojamiento) => {
        // Primero se borran las relaciones alojamiento-servicios
        try {
            actualizarAlojamientoServicios(idAlojamiento, []).then(() => {
                fetch(
                    APIURL + "alojamiento/deleteAlojamiento/" + idAlojamiento,
                    {
                        method: "DELETE",
                    }
                ).then((res) => {
                    if (res.ok) {
                        fetchAlojamientos();
                    }
                });
            });
        } catch (error) {
            console.log("Error al borrar el alojamiento: " + error);
        }
    };

    // ************ Tipos de alojamientos ************
    const fetchTiposAlojamiento = () => {
        fetch(APIURL + "tiposAlojamiento/getTiposAlojamiento")
            .then((response) => response.json())
            .then((response) => {
                setListaTiposAlojamiento(response);
            })
            .catch((error) => {
                setErrFetchTiposAlojamiento(true);
                console.log("Error al obtener tipos de alojamiento.");
            });
    };

    const crearTipoAlojamiento = (alojamiento) => {
        fetch(APIURL + "tiposAlojamiento/createTipoAlojamiento", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                Descripcion: alojamiento,
            }),
        }).then((res) => {
            if (res.status === 200) {
                fetchTiposAlojamiento();
            }
        });
    };

    const borrarTipoAlojamiento = (id) => {
        fetch(APIURL + "tiposAlojamiento/deleteTipoAlojamiento/" + id, {
            method: "DELETE",
        }).then((response) => {
            if (!response.ok) {
                throw new Error("Error al borrar tipo de alojamiento");
            }
            fetchTiposAlojamiento();
        });
    };

    const editarTipoAlojamiento = (id, descripcion) => {
        fetch(APIURL + "tiposAlojamiento/putTipoAlojamiento/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                Descripcion: descripcion,
            }),
        }).then((response) => {
            if (!response.ok) {
                throw new Error("No se pudo actualizar.");
            }
            fetchTiposAlojamiento();
        });
    };

    /**
     * Una vez realizado el fetch, buscar el tipo de alojamiento en la lista por ID.
     */
    const getTipoAlojamiento = (id) => {
        let tipoAlojamiento = null;
        for (const tipo of listaTiposAlojamiento) {
            if (tipo.idTipoAlojamiento === id) {
                tipoAlojamiento = tipo;
                break;
            }
        }
        return tipoAlojamiento;
    };

    /// ******************* Servicios de los alojamientos ******************* ///
    const fetchServicios = () => {
        fetch(APIURL + "servicio/getAllServicios")
            .then((res) => res.json())
            .then((data) => {
                setListaServicios(data);
            })
            .catch((error) => {
                setErrFetchServicios(true);
                console.log("No se pudieron cargar servicios.");
            });
    };

    const crearServicio = (nombreServicio) => {
        fetch(APIURL + "servicio/createServicio", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                Nombre: nombreServicio,
            }),
        }).then((response) => {
            if (response.ok) {
                fetchServicios();
            }
        });
    };

    const borrarServicio = (id) => {
        fetch(APIURL + "servicio/deleteServicio/" + id, {
            method: "DELETE",
        }).then((res) => (res.ok ? fetchServicios() : null));
    };

    const editarServicio = (id, nombreServicio) => {
        fetch(APIURL + "servicio/updateServicio/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                Nombre: nombreServicio,
            }),
        }).then((res) => (res.ok ? fetchServicios() : null));
    };

    useEffect(() => {
        fetchAlojamientos();
        fetchTiposAlojamiento();
        fetchServicios();
        fetchAlojamientosServivios();
    }, []);

    return (
        <ApiServiceContext.Provider
            value={{
                APIURL,
                actualizarTituloAlojamiento,
                actualizarAlojamiento,
                borrarAlojamiento,
                listaTiposAlojamiento,
                crearTipoAlojamiento,
                borrarTipoAlojamiento,
                editarTipoAlojamiento,
                listaAlojamientos,
                getTipoAlojamiento,
                crearAlojamiento,
                listaServicios,
                crearServicio,
                borrarServicio,
                editarServicio,
                listaAlojamientosServicios,
                actualizarAlojamientoServicios,
                errFetchAlojamientos,
                errFetchTiposAlojamiento,
                errFetchServicios,
                errFetchAlojamientosServicios,
            }}
        >
            {children}
        </ApiServiceContext.Provider>
    );
};

export const useApi = () => {
    return useContext(ApiServiceContext);
};
