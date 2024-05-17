import React from "react";
import "../css/Hotel.css";
import hotelImg from "../img/hotel.png";

export const Hotel = ({ name, imgSrc }) => {
    return (
        <div className="hotel">
            <div className="image-container">
                <img src={hotelImg} alt="hotel" />
                <button className="image-button left">{"<"}</button>
                <button className="image-button right">{">"}</button>
            </div>
            <div className="hotel-info">
                <div
                    style={{
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "center",
                        gap: "6rem",
                    }}
                >
                    <a href="https://www.hotelkilton.com.ar/">{name}</a>
                    <span>✭ 4.50</span>
                </div>
                <p style={{ margin: "0.25rem", marginTop: "1rem" }}>
                    Descripción del hotel. Ubicación. Amenities.
                </p>
            </div>
        </div>
    );
};

export default Hotel;
