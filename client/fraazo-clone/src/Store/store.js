import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";
import { cartReducer } from "./Cart/cart.reducer";
import { productReducer } from "./Products/products.reducer";

const rootReducer = combineReducers({
   auth:authReducer,
   product:productReducer,
   cart:cartReducer
   
    
})

export const store = legacy_createStore( rootReducer, applyMiddleware(thunk));