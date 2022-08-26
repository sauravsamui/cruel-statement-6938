import {
  PRODUCTS_ERROR,
  PRODUCTS_LOADING,
  PRODUCTS_SUCESS,
} from "./products.types";
import axios from "axios";

export const showProducts = (value)=>(dispatch) => {
  dispatch({ type: PRODUCTS_LOADING });

  return axios
    .get(`http://localhost:8080/cart/items`,{
      category: value
    })
    .then((r) => {
      dispatch({ type: PRODUCTS_SUCESS, payload: r.data });
    })
    .catch(() => {
      console.log("error")
      dispatch({ type: PRODUCTS_ERROR });
    });
};



  


