
import { LOGOUT, SIGNUP_SUCCESS } from "./auth.types";

export const signupApi = ()=>(dispatch)=>{
   
      dispatch({type:SIGNUP_SUCCESS});
  
}

// export const loginApi = (value)=>(dispatch)=>{
//    dispatch({type:LOGIN_LOADING,})
//    axios.post("https://enigmatic-woodland-19583.herokuapp.com/auth/login",{
//       ...value
//    })
//    .then((res)=>dispatch({type:LOGIN_SUCCESS,payload:res.data}))
//    .catch((err)=>dispatch({type:LOGIN_ERROR}))
// }

export let logout =()=>(
   {type:LOGOUT}
)