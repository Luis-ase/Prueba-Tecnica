import React,{useEffect} from "react";

import Card from "../Card/Card";

export default function Cards ({ProductsAll}){


    const products = ProductsAll
   
    return(
        <>
        <h2>Resultados : {products.length}</h2>

        {products?.map((e)=>{
            return (<div>
            <Card 
            key={e.id}
            id={e.id}
            name={e.name}
            image={e.image}
            rating={e.rating}
            price={e.price}
            />
            </div>)
        })
        }
        </>
    )
}