import {
  PRODUCTS_ERROR,
  PRODUCTS_LOADING,
  PRODUCTS_SUCESS,
} from "./products.types";

let initialState = {
  loading: false,
  error: false,
  data: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCTS_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case PRODUCTS_SUCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    }

    case PRODUCTS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    default: {
      return state;
    }
  }
};
