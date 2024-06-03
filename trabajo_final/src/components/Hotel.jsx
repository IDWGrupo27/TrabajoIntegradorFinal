import React, {useRef, useState, useEffect} from "react";
import "../css/Hotel.css";
import { faWifi, faBed, faPersonSwimming, faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Hotel = (props) => {
   
    const listRef = useRef()
    const [imageIndex, setImageIndex] = useState(0)

    useEffect(() => {
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll("li > img")[imageIndex]
        if (imgNode) {
            imgNode.scrollIntoView({
                behavior: 'smooth', block: 'nearest', inline: 'end' 
            })
        }
    }, [imageIndex])

    const circleSlide = (slideIndex) => {
        setImageIndex(slideIndex);
    }

    return (
        <div className="hotel">
            <div style={{alignSelf:"center", marginTop:"10px"}}>
                {props.disponible ? <span style={{color:"green", fontSize:"15px", fontWeight:"900"}}>Disponible &#x2714;</span> : <span style={{color:"red", fontSize:"15px", fontWeight:"900"}}>No disponible &#x2715;</span>}
            </div>
           <div className="slider-container">
                <div className="container-images">
                    <ul ref={listRef}>
                        {
                            props.imgSrc.map((item) => {
                                return <li key={item.id}>
                                    <img src={item.imgUrl}/>
                                </li>
                            })
                        }
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
                {
                    props.imgSrc.map((_, idx) => (
                        <div 
                            key={idx} 
                            className={`dot-container-item ${idx === imageIndex ? "active" : ""}`} 
                            onClick={() => circleSlide(idx)}
                        >
                            &#x2609;
                        </div>
                    ))
                }
            </div>
            <div className="hotel-info">
                <p>{props.tipo}</p>
                <span>✭ {props.puntuacion}</span>
                <div className="">
                    <a href="https://www.hotelkilton.com.ar/">{props.name}</a>
                </div>
                <div className="info-descripcion">
                    <div> <FontAwesomeIcon icon={faWifi}/> {props.wifi} - </div>
                    <div> <FontAwesomeIcon icon={faBed}/> {props.dormitorios}</div>
                </div>
                <div className="info-descripcion">
                    <div> <FontAwesomeIcon icon={faPaw}/> {props.mascotas} - </div>
                    <div> <FontAwesomeIcon icon={faPersonSwimming}/> {props.piscina}</div>
                </div>
                
            </div>

           
        </div>
    );
};

export default Hotel;
