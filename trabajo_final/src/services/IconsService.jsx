import React, { createContext, useContext, useState } from "react";
import {
    faWifi,
    faPersonSwimming,
    faPaw,
    faCheck,
} from "@fortawesome/free-solid-svg-icons";

const IconsContext = createContext();

export const IconsService = ({ children }) => {
    const getServiceIcon = (serviceName) => {
        let s = serviceName.toUpperCase();
        if (s === "MASCOTAS" || s === "SE PERMITEN MASCOTAS") {
            return faPaw;
        } else if (s === "INTERNET" || s === "CONEXION A INTERNET") {
            return faWifi;
        } else if (s === "PISCINA" || s === "ACCESO A PISCINA") {
            return faPersonSwimming;
        }
        return faCheck;
    };

    return (
        <IconsContext.Provider value={{ getServiceIcon }}>
            {children}
        </IconsContext.Provider>
    );
};

export const useIcons = () => {
    return useContext(IconsContext);
};
