import React, { useEffect } from 'react'
import style from "./checkoutbill.module.css"

const Checkoutbill = ({cart,data,totalp,settotalp,txt,showadd,showslot,showpay}) => {
  // let total=JSON.parse(localStorage.getItem("tot"))
  // let total=0;
  // for(let i=0;i<data.length;i++){
  //   total=total+(+data[i].price)
  // }
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
                    <p><i className="fa-solid fa-indian-rupee-sign"></i> {totalp}</p>
                  </div>
                  <div className={style.coupflex}>
                    <p>Cart Total</p>
                    <p className={style.spm}>{data.length} items</p>
                    <p><i className="fa-solid fa-indian-rupee-sign"></i> {totalp}</p>
                  </div>
                  <div className={style.coupflex}>
                    <p>Other Charges</p>
                    <p><i className="fa-solid fa-indian-rupee-sign"></i> 30</p>
                  </div>
                  <hr />
                  <div className={style.coupflex}>
                    <p className={style.bold}>Total to Pay</p>
                    <p className={style.bold}><i className="fa-solid fa-indian-rupee-sign"></i> {totalp+30}</p>
                  </div>
                </div>
            </div>
            {txt?
            <div className={style.billbtn} onClick={toggle}>
              <div>
                <p className={style.sml}>Total</p>
                <p><i className="fa-solid fa-indian-rupee-sign"></i>{totalp+30}</p>
              </div>
              <p>{txt}</p>
            </div>
            :""}
        </div>
    </div>
  )
}

export default Checkoutbill