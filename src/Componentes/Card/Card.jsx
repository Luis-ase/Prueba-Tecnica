import React from "react";

export default function Card({name,id,rating,price,image}){
    return(
        <>
        <article key={id}>
            <img alt={name} src={image}/>
        <h4>{name}</h4>
        <p>Valoracion{rating}</p>
        <p>price {price.toLocaleString("es-AR",{style:"currency",currency:"ARS"})}</p>
        </article>
        </>
    )
}