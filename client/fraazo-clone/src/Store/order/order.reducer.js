import { GETORDER_ERROR, GETORDER_LOADING, GETORDER_SUCCESS, POSTORDER_ERROR, POSTORDER_LOADING, POSTORDER_SUCCESS } from "./order.type"

let initialState ={
    getOrder:{
       loading:false,
       error:false,
    },
    postOrder:{
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
        
        case POSTORDER_LOADING:{
            return {...state,postOrder:{
                ...state.postOrder,loading:true,error:false
            }}
        }
        case POSTORDER_SUCCESS:{
            return {...state,postOrder:{
                ...state.postOrder,loading:false,error:false
            }}
        }
        case POSTORDER_ERROR:{
            return {...state,postOrder:{
                ...state.postOrder,loading:false,error:true
            }}
        }

        default:{
            return state
        }
    }
}