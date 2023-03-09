import axios from "axios"

export const GETAPI = "GETAPI";
export const FILTERCOLOR= "FILTERCOLOR"
export const FILTERATING ="FILTERATING"
export const FILTERCATEGORY="FILTERCATEGORY"
export const FILTERPRICE="FILTERPRICE"

export const getProducts= ()=>{
    return async function(dispatch){
        let json = await axios.get("http://api.devtoolstech.in/ecommerce/products")
        return dispatch({
            type:GETAPI,
            payload:json.data
        })
    }
}


export const orderColor = (payload)=>{
    console.log(payload)
    return{
        type:FILTERCOLOR,
        payload
    }
}

export const orderPrice = (payload)=>{
    console.log(payload)
    return{
        type:FILTERPRICE,
        payload
    }
}

export const orderRating = (payload)=>{
    console.log(payload)
    return{
        type:FILTERATING,
        payload
    }
}

export const orderCategory = (payload)=>{
    console.log(payload)
    return{
        type:FILTERCATEGORY,
        payload
    }
}