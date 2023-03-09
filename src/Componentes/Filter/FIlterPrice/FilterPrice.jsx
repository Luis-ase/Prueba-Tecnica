import React from "react";
import { useDispatch  } from "react-redux";
import { orderPrice } from "../../../store/actions/actions"; 

export default function FilterPrice(){
    const dispatch = useDispatch();


    const handleChangeCategory = (e)=>{
       console.log(e)
    }
    

    return(
        <>
        <h2>Filtrodo por price</h2>
        
        

        </>
    )
}