
import axios from "axios";
import { GETORDER_ERROR, GETORDER_LOADING, GETORDER_SUCCESS, POSTORDER_ERROR, POSTORDER_LOADING, POSTORDER_SUCCESS } from "./order.type";




export const getOrderApi =(id)=>(dispatch)=>{
   dispatch({type:GETORDER_LOADING});

   axios.get("https://serene-hollows-15248.herokuapp.com/products/all"
   ).then((res)=>{
     let d = res.data.data.filter((el)=> el.category=="ExoticFruits");
      dispatch({type:GETORDER_SUCCESS,payload:d});
   }).catch((er)=>dispatch({type:GETORDER_ERROR}));
}


export const postOrderApi =(id,items)=>(dispatch)=>{
    dispatch({type:POSTORDER_LOADING});
 
    axios.post("https://serene-hollows-15248.herokuapp.com/products/all",{
       items
    }
    ).then((res)=>{
       dispatch({type:POSTORDER_SUCCESS});
    }).catch((er)=>dispatch({type:POSTORDER_ERROR}));
 }