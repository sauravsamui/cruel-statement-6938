import { GETORDER_ERROR, GETORDER_LOADING, GETORDER_SUCCESS } from "./order.type"

let initialState ={
    getOrder:{
       loading:false,
       error:false,
    },
    
    data:[]
}

export const orderReducer = (state=initialState,{type,payload})=>{

    switch(type){
        case GETORDER_LOADING:{
            return {...state,getOrder:{
                ...state.getOrder,loading:true,error:false
            }}
        }
        case GETORDER_SUCCESS:{
            return {...state,getOrder:{
                ...state.getOrder,loading:false,error:false
            },data:payload}
        }
        case GETORDER_ERROR:{
            return {...state,getOrder:{
                ...state.getOrder,loading:false,error:true
            }};
        }

        default:{
            return state
        }
    }
}