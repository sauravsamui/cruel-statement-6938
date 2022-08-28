
import { LOGOUT, SIGNUP_SUCCESS } from "./auth.types";

export const signupApi = ()=>(dispatch)=>{
   
      dispatch({type:SIGNUP_SUCCESS});
  
}



export let logout =()=>(
   {type:LOGOUT}
)