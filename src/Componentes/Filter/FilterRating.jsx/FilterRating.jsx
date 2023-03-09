import React from "react";
import { useDispatch  } from "react-redux";
import { orderRating } from "../../../store/actions/actions"; 

export default function FilterRating(){
    const dispatch = useDispatch();

    const handleChangePrice = (e,boolean)=>{
        dispatch(orderRating(e))
    }
    

    return(
        <>
        <h3>Filtrodo por price</h3>
        <ul style={{border:"1px solid black",padding:"10px"}} key="lista de price">
           {[5,4,3,2,1]?.map((numberPrice)=>{
            return(
                <>
                <li key={numberPrice}>
                    <input 
                     onChange={(e)=>handleChangePrice(numberPrice,e.target.checked)}
                    name="color"
                    value={numberPrice} 
                    type="checkbox"/>
                    <label key={numberPrice}>{"★".repeat(numberPrice).padEnd(5,"☆")}</label>
                </li>
                </>
            )
           })}
        </ul>

        </>
    )
}