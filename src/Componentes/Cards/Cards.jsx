import React,{useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { getProducts } from "../../store/actions/actions";
import Card from "../Card/Card";
import FilterCategory from "../Filter/FilterCategory.jsx/FilterCategory";
import FilterColor from "../Filter/FilterColor/FilterColor";
export default function Cards (){

    const dispatch = useDispatch()
    const products = useSelector((state) => state.Products)
   


    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])
    return(
        <>
        <h2>Resultados : {products.length}</h2>

        {products?.map((e)=>{
            return (<div>
            <Card
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