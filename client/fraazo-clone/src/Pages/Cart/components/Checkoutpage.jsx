import React, { useState } from 'react'
import Checkaddress from './Checkaddress'
import Checkcart from './Checkcart'
import Checkoutbill from './Checkoutbill'
import Checkpay from './Checkpay'
import Checkslot from './Checkslot'
import style from "./checkoutpage.module.css"
import { useDispatch, useSelector } from 'react-redux'

// Place all condtionals in separate  functions
const Checkoutpage = () => {
    const {cartData: data } = useSelector((state) => state.cart);
    const [cart, setcart] = useState(true)
    const [add, setadd] = useState(false)
    const [slot, setslot] = useState(false)
    const [pay, setpay] = useState(false)

    let showcart=()=>{
        setcart(true)
        setadd(false)
        setslot(false)
        setpay(false)
    }
    let showadd=()=>{
        setcart(false)
        setadd(true)
        setslot(false)
        setpay(false)
        
    }
    let showslot=()=>{
        setcart(false)
        setadd(false)
        setslot(true)
        setpay(false)
        
    }
    let showpay=()=>{
        setcart(false)
        setadd(false)
        setslot(false)
        setpay(true)
        
    }


  
  

  return (
    <div>
        <div className={style.maincp}>
            <div className={style.color} onClick={showcart}>
                <i className="fa-solid fa-cart-arrow-down"></i>

            </div>
            <div className={add||slot||pay?style.cpdlsolid:style.cpdl}>

            </div>
            <div className={add||slot||pay?style.color:style.cplcar} onClick={showadd}>
                <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className={slot||pay?style.cpdlsolid:style.cpdl}>

            </div>
            <div className={slot||pay?style.color:style.cplcar}  onClick={showslot}>
                <i className="fa-solid fa-calendar"></i>
            </div>
            <div className={pay?style.cpdlsolid:style.cpdl}>

            </div>
            <div className={pay?style.color:style.cplcar}  onClick={showpay}>
                <i className="fa-solid fa-wallet"></i>
            </div>
        </div>
        <div className={style.botcheck}>

            {cart?<Checkcart  />:""}
            {add?<Checkaddress/>:""}
            {slot?<Checkslot/>:""}
            {pay?<Checkpay/>:""}
            {cart?<Checkoutbill cart={cart} txt={"SELECT ADDRESS"}  showadd={showadd}  showslot={showslot}  showpay={showpay} />:""}
            {add?<Checkoutbill   txt={"SELECT DELIVERY SLOT"} showadd={showadd}  showslot={showslot}  showpay={showpay} />:""}
            {slot?<Checkoutbill   txt={"PLACE ORDER"} showadd={showadd}  showslot={showslot}  showpay={showpay} />:""}
            {pay?<Checkoutbill   />:""}

        </div>
        
    </div>
  )
}

export default Checkoutpage