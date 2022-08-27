import {
  PRODUCTS_ERROR,
  PRODUCTS_LOADING,
  PRODUCTS_SUCESS,
} from "./products.types";
import axios from "axios";

export const showProducts = (value)=>(dispatch) => {
  dispatch({ type: PRODUCTS_LOADING });

  return axios
    .get("https://serene-hollows-15248.herokuapp.com/products/all")
    .then((r) => {
      dispatch({ type: PRODUCTS_SUCESS, payload: r.data.data });
    })
    .catch(() => {
      console.log("error")
      dispatch({ type: PRODUCTS_ERROR });
    });
};



  


