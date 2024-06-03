import React from "react";
import "../css/Hotel.css";
import hotelImg from "../img/hotel.png";

export const Hotel = ({ name, descripcion, disponible, imgSrc }) => {
    return (
        <div className="hotel">
            <div className="image-container">
                <img src={hotelImg} alt="hotel" />
                <button className="image-button left">{"<"}</button>
                <button className="image-button right">{">"}</button>
            </div>
            <div className="hotel-info">
                <table>
                    <tr>
                        <td>{name}</td>
                        <td>
                            {disponible ? (
                                <span className="available">Disponible</span>
                            ) : (
                                <span className="not-available">
                                    Sin disponibilidad
                                </span>
                            )}
                        </td>
                    </tr>
                </table>

                <p style={{ margin: "0.25rem", marginTop: "1rem" }}>
                    {descripcion}
                </p>
            </div>
        </div>
    );
};

export default Hotel;
