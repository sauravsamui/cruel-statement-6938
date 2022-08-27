import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT, SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS } from "./auth.types"


let initialState ={
    signup:{
    loading:false,
    error:false,
    sucess:false
    },
    login:{
        loading:false,
        error:false,
        wrongCred:false
        },
        isAuth:false
}


export const authReducer =(state=initialState,{type,payload})=>{
    switch(type){

      
        case SIGNUP_SUCCESS:{
            return {...state,signup:{
                ...state.signup,loading:false,error:false,sucess:true
            },isAuth:true}
        }
       case LOGOUT:{
         localStorage.removeItem('UserStoredDataFraazo'); 
           return {...state,signup:{
            ...state.signup,sucess:false},login:{
                ...state.login,wrongCred:false
            },isAuth:false}
       }

        default :{
            return state
        }
        
    }
}