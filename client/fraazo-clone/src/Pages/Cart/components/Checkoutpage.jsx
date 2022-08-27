import React, { useState } from 'react'
import Checkaddress from './Checkaddress'
import Checkcart from './Checkcart'
import Checkoutbill from './Checkoutbill'
import style from "./checkoutpage.module.css"

const Checkoutpage = ({data,setdata,totalp,settotalp}) => {
    const [cart, setcart] = useState(false)
    const [add, setadd] = useState(true)
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

            {cart?<Checkcart data={data} setdata={setdata} totalp={totalp} settotalp={settotalp}/>:""}
            {add?<Checkaddress/>:""}
            {cart?<Checkoutbill data={data} totalp={totalp} settotalp={settotalp} txt={"SELECT ADDRESS"}  showadd={showadd}  showslot={showslot}  showpay={showpay} />:""}
            {add?<Checkoutbill data={data} totalp={totalp} settotalp={settotalp} txt={"SELECT DELIVERY SLOT"} showadd={showadd}  showslot={showslot}  showpay={showpay} />:""}
            {slot?<Checkoutbill data={data} totalp={totalp} settotalp={settotalp} txt={"PLACE ORDER"} showadd={showadd}  showslot={showslot}  showpay={showpay} />:""}
            {pay?<Checkoutbill data={data} totalp={totalp} settotalp={settotalp} />:""}

        </div>
        
    </div>
  )
}

export default Checkoutpage