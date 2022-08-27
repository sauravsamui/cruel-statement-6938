import React from 'react'
import { useSelector } from 'react-redux';
import style from "./checkoutbill.module.css"

const Checkoutbill = ({cart,txt,showadd,showslot,showpay}) => {
  const { cartData: data } = useSelector((state) => state.cart);
  let sum=0;
  for(let i=0;i<data.length;i++){
      sum=sum+(+data[i].payload.price*data[i].payload.quantity)
  }
  const toggle=()=>{
    if(txt=="SELECT ADDRESS"){
      showadd()
    }
    else if(txt=="SELECT DELIVERY SLOT"){
      showslot()
    }else{
      showpay()
    }
  }
  return (
    <div className={style.cbc}>
        <div>
            <div className={style.main}>
                <div className={cart?style.coupmain:style.coupmainhide} >
                  <div className={style.subcoup}>
                    <img src="https://webasset.fraazo.com/production/applycoupon.29436044b77d6c30ae44.png" alt="" />
                    <p>Apply Coupon/Referral</p>
                  </div>
                  <div>
                    <i className="fa-solid fa-angle-right"></i>
                  </div>
                    
                </div>
                <div>
                  <h1 className={style.bilbold}>Bill Details</h1>
                  <div className={style.coupflex}>
                    <p>Total Items Price</p>
                    <p><i className="fa-solid fa-indian-rupee-sign"></i> {sum}</p>
                  </div>
                  <div className={style.coupflex}>
                    <p>Cart Total</p>
                    <p className={style.spm}>{data.length} items</p>
                    <p><i className="fa-solid fa-indian-rupee-sign"></i> {sum}</p>
                  </div>
                  <div className={style.coupflex}>
                    <p>Other Charges</p>
                    <p><i className="fa-solid fa-indian-rupee-sign"></i> 30</p>
                  </div>
                  <hr />
                  <div className={style.coupflex}>
                    <p className={style.bold}>Total to Pay</p>
                    <p className={style.bold}><i className="fa-solid fa-indian-rupee-sign"></i> {sum+30}</p>
                  </div>
                </div>
            </div>
            {txt?
            <div className={style.billbtn} onClick={toggle}>
              <div>
                <p className={style.sml}>Total</p>
                <p><i className="fa-solid fa-indian-rupee-sign"></i>{sum+30}</p>
              </div>
              <p>{txt}</p>
            </div>
            :""}
        </div>
    </div>
  )
}

export default Checkoutbill