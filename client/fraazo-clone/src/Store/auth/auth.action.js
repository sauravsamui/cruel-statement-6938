
import axios from "axios";
import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT, SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS } from "./auth.types";







export const signupApi = (value)=>(dispatch)=>{
   let u = value.username
     dispatch({type:SIGNUP_LOADING,})
     axios.post("https://enigmatic-woodland-19583.herokuapp.com/auth/signup",{
        ...value
     })
     .then((res)=>{localStorage.setItem("signupAuth",u)
      dispatch({type:SIGNUP_SUCCESS,payload:value});
   })
     .catch((err)=>dispatch({type:SIGNUP_ERROR}))
}

export const loginApi = (value)=>(dispatch)=>{
   dispatch({type:LOGIN_LOADING,})
   axios.post("https://enigmatic-woodland-19583.herokuapp.com/auth/login",{
      ...value
   })
   .then((res)=>dispatch({type:LOGIN_SUCCESS,payload:res.data}))
   .catch((err)=>dispatch({type:LOGIN_ERROR}))
}

export let logout =()=>(
   {type:LOGOUT}
)