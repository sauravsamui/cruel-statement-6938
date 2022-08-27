import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeCartApi, updateCartApi } from "../../../Store/Cart/cart.actions";

import style from "./item.module.css";
const Item = ({ e }) => {
 const dispatch = useDispatch()

 
  
  const [a, seta] = useState(e.payload.quantity);
  let removeelement=(id)=>{

    dispatch(removeCartApi(id));
    

  }

  return (
    <div>
      {
        <div key={e._id} className={style.itemmain}>
          <div className={style.smainitem}>
            <img src={e.payload.src} alt="" />
            <div className={style.itmnqp}>
              <p className={style.txtname}>{e.payload.name}</p>
              <p  className={style.txtquant}>{e.payload.quantity} qty</p>
              <p  className={style.txtprice}><i class="fa-solid fa-indian-rupee-sign"></i> {e.payload.price}</p>
            </div>
          </div>
          <div className={style.qcar}>
            <p className={style.remtxt} onClick={()=>removeelement(e._id)}>Remove</p>
            <div className={style.quantcarr}>
              <div
                className={style.decs}
                
                onClick={() => {
                  
                  
                  {a>1?e.payload.quantity = e.payload.quantity - 1 :e.payload.quantity=e.payload.quantity}
                  seta(e.payload.quantity);
                  dispatch(updateCartApi(e._id,e.payload.quantity)) }}
              >
                -
              </div>
              <p>{a}</p>
              <div
                className={style.incs}
                onClick={() => {
                  {a>=1?e.payload.quantity = e.payload.quantity + 1 :e.payload.quantity=e.payload.quantity}
                  seta(e.payload.quantity);
                  dispatch(updateCartApi(e._id,e.payload.quantity)) }}
              >
                +
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Item;
