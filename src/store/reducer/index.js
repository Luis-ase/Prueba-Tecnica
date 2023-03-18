
import { GETAPI ,FILTERCOLOR, FILTERATING} from "../actions/actions"

const initialState ={
    Products:[],
    ProductsForFilter:[],
    productsYafiltrados:{
        Products:[],
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
            state.productsYafiltrados.color.push(action.payload);
            let copiaTheColors = state.productsYafiltrados.color;
            let filtrado= state.ProductsForFilter
            let resutl= []
            for (let l = 0; l < copiaTheColors.length; l++) {
             let resultFilter=  filtrado.filter((e)=> e.color === copiaTheColors[l])
               resutl.push({resultFilter}) 
               
            } 
            const nuevoObjeto = resutl.reduce((acc, curr) => {
                acc.resultFilter = acc.resultFilter.concat(curr.resultFilter);
                return acc;
              }, { resultFilter: [] });
              
              const nuevoArray = [nuevoObjeto];
              
              let pasarObjeto = nuevoArray[0].resultFilter

              console.log(pasarObjeto)
             let ahroaSI= state.productsYafiltrados.Products= pasarObjeto;
             

            return{
                ...state,
                Products: ahroaSI,
            }

        case FILTERATING:
            
            let productsFiltrados = state.ProductsForFilter?.filter((e)=> e.rating === action.payload)
            
            return{
                ...state,
                Products:productsFiltrados,
                
            }  

        default:{
            return state
        };
    };
};


export default rootReducer;