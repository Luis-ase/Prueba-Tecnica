import React, { useState } from "react";
import { useMemo } from "react";
import { orderColor } from "../../../store/actions/actions";
import { useDispatch,useSelector} from "react-redux";

export default function FilterColor({Products}){
    const [select ,setSelect] = useState(()=>new Set())

    const productAll = useSelector((state)=> state.ProductsForFilter)

    const dispatch = useDispatch()
    const products = Products

    const colors = useMemo(()=>{
        if(products){

            let name = productAll?.map((e)=>
                e.color)
            let data = new Set(name)

            
            let result = data && [...data]
            return result
            
        }
    },[products])

    // const handleChange =(color,boolean)=>{
    //     const clone = structuredClone(select)
    //     if(boolean){
    //         clone.add(color) 
    //     }else{
    //         clone.delete(color)
    //     }
    //     const state = setSelect(clone)
    //     console.log(clone)
    //     dispatch(orderColor(state))
    // }

    const handleChangeSelect = (e)=>{
        e.preventDefault()
        dispatch(orderColor(e.target.value))
    }
    
    return(
        <>
        <h3>Filtrado por Color </h3>
        {/* <ul style={{border:"1px solid black",padding:"10px"}}>
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
        </ul> */}

        <select onChange={e => handleChangeSelect(e)}>
            {colors?.map((colorname)=>{
                return(
                    <>
                    <option  key={colorname} value={colorname}>{colorname}</option>
                    </>
                )
            })}
        </select>
        </>
    )
}