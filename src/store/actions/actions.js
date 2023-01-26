import axios from "axios"

export const GETAPI = "GETAPI";

export const getProducts= ()=>{
    return async function(dispatch){
        let json = await axios.get("http://api.devtoolstech.in/ecommerce/products")
        return dispatch({
            type:GETAPI,
            payload:json.data
        })
    }
}
