import React from "react";
import { useDispatch  } from "react-redux";
import { orderCategory } from "../../../store/actions/actions"; 

export default function FilterCategory(){
    const dispatch = useDispatch();


    const handleChangeCategory = (e)=>{
       console.log(e)
    }
    

    return(
        <>
        <h2>Filtrodo por Category</h2>
        {[1,2,3,4,5]?.map((categoryNumber)=>{
            return(
                <>
                <button key={categoryNumber} 
                value={categoryNumber} 
                onClick={((e)=> handleChangeCategory(e.target.value))}>
                    {categoryNumber}
                </button>
                </>
            )
        })}
        </>
    )
}