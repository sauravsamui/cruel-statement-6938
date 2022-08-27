
import axios from "axios";
import { GETORDER_ERROR, GETORDER_LOADING, GETORDER_SUCCESS } from "./order.type";




export const getOrderApi =(id)=>(dispatch)=>{
   dispatch({type:GETORDER_LOADING});

   axios.get(`https://serene-hollows-15248.herokuapp.com/orders/get/${id}`
   ).then((res)=>{dispatch({type:GETORDER_SUCCESS,payload:res.data.data});
   }).catch((er)=>dispatch({type:GETORDER_ERROR}));
}
