import { createContext, useContext, useEffect, useState } from "react";

export const ApiServiceContext = createContext();

export const ApiService = ({ children }) => {
    const APIURL = "http://localhost:3001/";
    const [listaAlojamientos, setListaAlojamientos] = useState([]);
    const [listaTiposAlojamiento, setListaTiposAlojamiento] = useState([]);

    // ************ Alojamientos ************
    const fetchAlojamientos = () => {
        fetch(APIURL + "alojamiento/getAlojamientos")
            .then((response) => response.json())
            .then((response) => {
                setListaAlojamientos(response);
            })
            .catch((error) => {
                console.log(
                    "Error al obtener alojamientos. Mostrando solo alojamientos estáticos"
                );
            });
    };

    // ************ Tipos de alojamientos ************
    const fetchTiposAlojamiento = () => {
        fetch(APIURL + "tiposAlojamiento/getTiposAlojamiento")
            .then((response) => response.json())
            .then((response) => {
                setListaTiposAlojamiento(response);
            })
            .catch((error) => {
                setListaTiposAlojamiento([
                    {
                        idTipoAlojamiento: 1,
                        Descripcion: "Hotel",
                    },
                    {
                        idTipoAlojamiento: 2,
                        Descripcion: "Hostal",
                    },
                    {
                        idTipoAlojamiento: 3,
                        Descripcion: "Departamento",
                    },
                    {
                        idTipoAlojamiento: 4,
                        Descripcion: "Casa",
                    },
                    {
                        idTipoAlojamiento: 5,
                        Descripcion: "Cabaña",
                    },
                ]);
            });
        console.log(
            "Error al obtener tipos de alojamiento. Mostrando solo tipos estáticos"
        );
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

    useEffect(() => {
        fetchAlojamientos();
        fetchTiposAlojamiento();
    }, []);

    return (
        <ApiServiceContext.Provider
            value={{
                APIURL,
                listaTiposAlojamiento,
                crearTipoAlojamiento,
                borrarTipoAlojamiento,
                editarTipoAlojamiento,
                listaAlojamientos,
                getTipoAlojamiento,
            }}
        >
            {children}
        </ApiServiceContext.Provider>
    );
};

export const useApi = () => {
    return useContext(ApiServiceContext);
};
