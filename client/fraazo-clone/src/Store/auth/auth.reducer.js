import { LOGOUT, SIGNUP_SUCCESS } from "./auth.types"

        let UserStoredDataFraazo = JSON.parse(localStorage.getItem('UserStoredDataFraazo')) || {}
        var loggedInAlready = Object.keys(UserStoredDataFraazo).length;
       

let initialState ={
    signup:{
    loading:false,
    error:false,
    sucess:false
    },
  
    isAuth: !!loggedInAlready
}


export const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SIGNUP_SUCCESS:{
            return {...state,signup:{
                ...state.signup,loading:false,error:false,sucess:true
            },isAuth:true}
        }
       case LOGOUT:{
         localStorage.removeItem('UserStoredDataFraazo'); 
           return {...state,isAuth:false}
       }
        default: {
            return state
        }

    }
}