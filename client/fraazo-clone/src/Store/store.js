import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";
import { cartReducer } from "./Cart/cart.reducer";
<<<<<<< HEAD
=======
import { orderReducer } from "./order/order.reducer";
>>>>>>> main
import { productReducer } from "./Products/products.reducer";

const rootReducer = combineReducers({
   auth:authReducer,
   product:productReducer,
   cart:cartReducer,
   order:orderReducer
   
    
})

export const store = legacy_createStore( rootReducer, applyMiddleware(thunk));