import React,{useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { getProducts } from "../../store/actions/actions";
import Card from "../Card/Card";
export default function Cards ({name,id}){
    const dispatch = useDispatch()
    const products = useSelector((state) => state.Products)
    console.log(products)
    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])
    return(
        <>
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