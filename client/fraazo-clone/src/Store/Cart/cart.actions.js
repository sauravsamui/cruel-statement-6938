import axios from "axios";
import { ADD_TO_CART_ERROR, ADD_TO_CART_LOADING, ADD_TO_CART_SUCCESS, GET_ITEM_CART_ERROR, GET_ITEM_CART_LOADING, GET_ITEM_CART_SUCCESS, GET_PRODUCT_DETAILS_ERROR, GET_PRODUCT_DETAILS_LOADING, GET_PRODUCT_DETAILS_SUCCESS, REMOVE_FROM_CART_ERROR, REMOVE_FROM_CART_LOADING, REMOVE_FROM_CART_SUCCESS, UPDATE_CART_ERROR, UPDATE_CART_LOADING, UPDATE_CART_SUCCESS } from "./cart.types";



export const getItemApi=(id)=>(dispatch)=>{
    dispatch({type:GET_ITEM_CART_LOADING})

    axios.get(`https://serene-hollows-15248.herokuapp.com/products/one/${id}`)//userId
    .then((res)=>(dispatch({type:GET_ITEM_CART_SUCCESS,payload:res.data})))
    .catch((r)=>(dispatch({type:GET_ITEM_CART_ERROR})))
} 

export const addCartApi=(user,id)=>(dispatch)=>{
     dispatch({type:ADD_TO_CART_LOADING});
        axios.post(`https://serene-hollows-15248.herokuapp.com/products/one`)
        .then((res)=>(dispatch({type:ADD_TO_CART_SUCCESS,payload:res.data})))
         .catch((r)=>(dispatch({type:ADD_TO_CART_ERROR})))
     
}

export const removeCartApi=(id)=>(dispatch)=>{
   dispatch({type:REMOVE_FROM_CART_LOADING})

   axios.delete(`http://localhost:8080/cartItem/${id}`)
   .then((res)=>(dispatch({type:REMOVE_FROM_CART_SUCCESS,payload:id})))
   .catch((r)=>(dispatch({type:REMOVE_FROM_CART_ERROR})))
}

export const updateCartApi=(id,quantity,size)=>(dispatch)=>{
   dispatch({type:UPDATE_CART_LOADING})

   axios.patch(`http://localhost:8080/cartItem/${id}`,{
      quantity:quantity,
      size:size
   }).then((res)=>(dispatch({type:UPDATE_CART_SUCCESS,payload:{id,quantity,size}})))
   .catch((r)=>(dispatch({type:UPDATE_CART_ERROR})))
}

export const getproductdetailsApi=(id)=>(dispatch)=>{
   dispatch({type:GET_PRODUCT_DETAILS_LOADING})
  
      axios.get(`https://serene-hollows-15248.herokuapp.com/products/one/${id}`)
      .then((res) => (dispatch({type:GET_PRODUCT_DETAILS_SUCCESS,payload:res.data.data})))
      .catch((r)=>(dispatch({type:GET_PRODUCT_DETAILS_ERROR})))
 
  
}