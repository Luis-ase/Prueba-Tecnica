import Reac,{ useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getProducts } from '../../store/actions/actions';
import Cards from "../Cards/Cards"
import FilterColor from '../Filter/FilterColor/FilterColor';
import FilterCategory from '../Filter/FilterCategory/FilterCategory';
import FilterPrice from '../Filter/FIlterPrice/FilterPrice';
import FilterRating from '../Filter/FilterRating.jsx/FilterRating';


export default function Home(){

    const dispatch = useDispatch()
    const products = useSelector((state)=> state.Products) 
    const [selectp ,setSelectp] =useState()

    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])

    

    return(
        <>
        <FilterCategory/>
        <FilterPrice/>
        <FilterColor Products={products} chang/>
        <FilterRating/>
        <Cards ProductsAll ={products}/>
        </>
    )
}