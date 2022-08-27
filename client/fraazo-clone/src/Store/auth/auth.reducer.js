import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT, SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS } from "./auth.types"

        let UserStoredDataFraazo = JSON.parse(localStorage.getItem('UserStoredDataFraazo')) || {}
        var loggedInAlready = Object.keys(UserStoredDataFraazo).length;
        console.log(loggedInAlready)

let initialState ={
    signup:{
    loading:false,
    error:false,
    sucess:false
    },
    login: {
        loading: false,
        error: false,
        wrongCred: false
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