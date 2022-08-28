import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCartApi, updateCartApi } from "../../../Store/Cart/cart.actions";

import style from "./item.module.css";
const Item = ({ e }) => {
 const dispatch = useDispatch();
const {updateItemCart} = useSelector((state)=>state.cart);
 
  
  
  let removeelement=(id)=>{
    dispatch(removeCartApi(id));
  }

  return (
    <div>
      
        <div key={e._id} className={style.itemmain}>
          <div className={style.smainitem}>
            <img src={e.payload.src} alt="" />
            <div className={style.itmnqp}>
              <p className={style.txtname}>{e.payload.name}</p>
             <p  className={style.txtquant}>{e.payload.quantity} qty</p>
              <p  className={style.txtprice}><i className="fa-solid fa-indian-rupee-sign"></i> {e.payload.price}</p>
            </div>
          </div>
          <div className={style.qcar}>
            <p className={style.remtxt} onClick={()=>removeelement(e._id)}>Remove</p>
            <div className={style.quantcarr}>
              <div
                className={style.decs}
                
                onClick={() => {
                  
                  if(e.payload.quantity>1){
                    let a = e.payload.quantity-1;
                    dispatch(updateCartApi(e._id,a)) 
                  }else{
                    removeelement(e._id)
                  }
                  }}
              >
                -
              </div>
              <p>{updateItemCart.loading ? <div className="spinner-border spinner-border-sm" role="status">
                  <span className="sr-only"></span>
                </div>:e.payload.quantity}</p>
              <div
                className={style.incs}
                onClick={() => {
                  if(e.payload.quantity>=1){
                    let a = e.payload.quantity+1;
                    dispatch(updateCartApi(e._id,a)) 
                 } }}
              >
                +
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Item;
