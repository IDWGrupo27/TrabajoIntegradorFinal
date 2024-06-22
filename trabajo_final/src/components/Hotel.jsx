import React, { useRef, useState, useEffect } from "react";

import "../css/Hotel.css";

import { faBed, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useApi } from "../services/ApiService";
import { useIcons } from "../services/IconsService";

import { images } from "../img/all";

/**
 * Devuelve el nombre del hotel en camelCase para buscarlo en las imágenes estáticas
 */
const camelize = (str) => {
    const newStr = str
        .replace(/ñ/g, "n")
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        })
        .replace(/\s+/g, "");
    return newStr;
};

export const Hotel = ({ hotel }) => {
    const {
        listaTiposAlojamiento,
        listaServicios,
        listaAlojamientosServicios,
    } = useApi();
    const { getServiceIcon } = useIcons();

    const [tipoAlojamiento, setTipoAlojamiento] = useState("");
    const [listaServiciosHotel, setListaServiciosHotel] = useState([]);
    const [hotelImages, setHotelImages] = useState(images.ninguna);

    const listRef = useRef();
    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll("li > img")[imageIndex];
        if (imgNode) {
            imgNode.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "end",
            });
        }
    }, [imageIndex]);

    useEffect(() => {
        const nuevaListaServicios = [];
        for (let i = 0; i < listaAlojamientosServicios.length; i++) {
            if (
                listaAlojamientosServicios[i].idAlojamiento ===
                hotel.idAlojamiento
            ) {
                // si se encuentra la relación servicio-alojamiento, se busca el servicio para unirlo al array
                const servicio = listaServicios.find(
                    (servicio) =>
                        servicio.idServicio ===
                        listaAlojamientosServicios[i].idServicio
                );
                nuevaListaServicios.push(servicio);
            }
        }
        setListaServiciosHotel(nuevaListaServicios);
    }, [listaServicios]);

    useEffect(() => {
        let hotelType = listaTiposAlojamiento.find(
            (t) => t.idTipoAlojamiento === hotel.idTipoAlojamiento
        );
        if (hotelType) {
            hotelType = camelize(hotelType.Descripcion);
            if (images[hotelType]) {
                setHotelImages(images[hotelType]);
            } else {
                setHotelImages(images.ninguna);
            }
        } else {
            setHotelImages(images.ninguna);
        }
    }, [hotel]);

    useEffect(() => {
        for (let i = 0; i < listaTiposAlojamiento.length; i++) {
            if (
                hotel.TipoAlojamiento ===
                listaTiposAlojamiento[i].idTipoAlojamiento
            ) {
                setTipoAlojamiento(listaTiposAlojamiento[i]);
            }
        }
    }, [listaTiposAlojamiento]);

    const circleSlide = (slideIndex) => {
        setImageIndex(slideIndex);
    };

    return (
        <div className="hotel">
            <span className="tipo">
                {tipoAlojamiento === "" || tipoAlojamiento === null
                    ? "Sin clasificar"
                    : tipoAlojamiento.Descripcion}
            </span>
            <div style={{ alignSelf: "center", marginTop: "10px" }}>
                {hotel.Estado === "Disponible" ? (
                    <span
                        style={{
                            color: "green",
                            fontSize: "15px",
                            fontWeight: "900",
                        }}
                    >
                        Disponible &#x2714;
                    </span>
                ) : (
                    <span
                        style={{
                            color: "red",
                            fontSize: "15px",
                            fontWeight: "900",
                        }}
                    >
                        No disponible &#x2715;
                    </span>
                )}
            </div>
            <div className="slider-container">
                <div className="container-images">
                    <ul ref={listRef}>
                        {hotelImages.map((item) => {
                            return (
                                <li key={item.id}>
                                    <img src={item.imgUrl} />
                                </li>
                            );
                        })}
                    </ul>
                    <button
                        onClick={() => setImageIndex(imageIndex - 1)}
                        className="image-button button-carrusel leftArrow"
                        disabled={imageIndex === 0}
                    >
                        &#x276E;
                    </button>
                    <button
                        onClick={() => setImageIndex(imageIndex + 1)}
                        className="image-button button-carrusel rightArrow"
                        disabled={imageIndex === 2}
                    >
                        &#x276F;
                    </button>
                </div>
            </div>
            <div className="dots-container">
                {hotelImages.map((_, idx) => (
                    <div
                        key={idx}
                        className={`dot-container-item ${
                            idx === imageIndex ? "active" : ""
                        }`}
                        onClick={() => circleSlide(idx)}
                    >
                        &#x2609;
                    </div>
                ))}
            </div>
            <div className="hotel-info">
                <div className="info-titulo">
                    <a href="https://www.hotelkilton.com.ar/">{hotel.Titulo}</a>
                </div>
                <div className="info-descripcion">
                    <div className="servicio">
                        <FontAwesomeIcon icon={faBed} />{" "}
                        {hotel.CantidadDormitorios} dormitorios
                    </div>
                    {listaServiciosHotel.length === 0 ? (
                        <>
                            {" "}
                            <div>Cargando servicios...</div>
                            <FontAwesomeIcon
                                className="spinner"
                                icon={faSpinner}
                            />
                        </>
                    ) : (
                        listaServiciosHotel.map((servicio) => (
                            <div key={servicio.idServicio} className="servicio">
                                {
                                    <FontAwesomeIcon
                                        icon={getServiceIcon(servicio.Nombre)}
                                    />
                                }{" "}
                                {servicio.Nombre}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Hotel;
