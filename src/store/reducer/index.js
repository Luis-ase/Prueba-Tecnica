import { GETAPI } from "../actions/actions"
const initialState ={
    Products:[]
};

const rootReducer = (state = initialState, action)=>{

    switch(action.type){

        case GETAPI:
            return{
                ...state,
                Products: action.payload
            };
        default:{
            return state
        };
    };
};


export default rootReducer;