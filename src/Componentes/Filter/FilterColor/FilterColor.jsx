import React, { useState } from "react";
import { useMemo } from "react";
import { orderColor } from "../../../store/actions/actions";
import { useDispatch,useSelector} from "react-redux";

export default function FilterColor(){

    const dispatch = useDispatch()
    const products = useSelector((state)=>state.ProductsForFilter)
    const [select ,setSelect] = useState(()=>new Set())
    const colors = useMemo(()=>{
        if(products){

            let name = products?.map((e)=>
                e.color)
            let data = new Set(name)

            
            let result = data && [...data]
            return result
            
        }
    },[products])

    const handleChange =(color,boolean)=>{
        const clone = structuredClone(select)
        if(boolean){
            clone.add(color) 
        }else{
            clone.delete(color)
        }
        setSelect(clone)
    //    luego no puedo hacer filtrado doble dispatch(orderColor(state))
    }
    
    return(
        <>
        <h3>Filtrado por Color </h3>
        <ul style={{border:"1px solid black",padding:"10px"}}>
           {colors?.map((colorOnly)=>{
            return(
                <>
                <li key={colorOnly}>
                    <input 
                    onChange={(e)=>handleChange(colorOnly,e.target.checked)}
                    name="color"
                    value={colorOnly} 
                    type="checkbox"/>
                    <label>{colorOnly}</label>
                </li>
                </>
            )
           })}
        </ul>
        </>
    )
}