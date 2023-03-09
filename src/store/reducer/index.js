
import { GETAPI ,FILTERCOLOR, FILTERATING} from "../actions/actions"

const initialState ={
    Products:[],
    ProductsForFilter:[],
    productsYafiltrados:{
        color:[],
        price:[],
        rating:[],
        category:[],
    },
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
            let allProducts = state.ProductsForFilter;
                
                allProducts = allProducts.filter((e)=>e.color  === filtersAplly)   
                console.log(allProducts)       
            return{
                ...state,
                Products: allProducts? allProducts: state.ProductsForFilter,
                productsYafiltrados:[...productsFiltrados, productsFiltrados.color=filtersAplly]
            }

        case FILTERATING:
            let rating = action.payload
            let productsFiltrados = state.ProductsForFilter?.filter((e)=> e.rating === action.payload)
            
            return{
                ...state,
                Products:productsFiltrados? productsFiltrados :state.ProductsForFilter,
                productsYafiltrados:[...productsFiltrados, productsFiltrados.color=rating]
            }  

        default:{
            return state
        };
    };
};


export default rootReducer;