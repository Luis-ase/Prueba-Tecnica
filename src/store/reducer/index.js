
import { GETAPI ,FILTERCOLOR} from "../actions/actions"
const initialState ={
    Products:[],
    ProductsForFilter:[]
};

const rootReducer = (state = initialState, action)=>{

    switch(action.type){

        case GETAPI:
            return{
                ...state,
                Products: action.payload,
                ProductsForFilter:action.payload
            };
        case FILTERCOLOR:
            let filtersAplly = action.payload
            let allProducts = state.Products;
            
            if(filtersAplly.size){

                for (const iterator of filtersAplly) {
                    allProducts = allProducts.filter((e)=>e.color  === iterator)   
                }
                
            }
            
            return{
                ...state,
            }

        default:{
            return state
        };
    };
};


export default rootReducer;