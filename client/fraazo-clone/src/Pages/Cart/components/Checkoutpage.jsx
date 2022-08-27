import React, { useState } from 'react'
import Checkaddress from './Checkaddress'
import Checkcart from './Checkcart'
import Checkoutbill from './Checkoutbill'
import Checkpay from './Checkpay'
import Checkslot from './Checkslot'
import style from "./checkoutpage.module.css"

const Checkoutpage = () => {
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

    let arr=[
        {id:1,src:"https://imageprod.fraazo.com/fraazo-prod/products/product_images/000/000/231/original/data?width=256&height=256&format=webp",name:"Sun Melon",quant:"1pc",price:31,c:1},
        {id:2,src:"https://imagemaster.fraazo.com/fraazo-master/products/FBAN14.png?width=256&height=256&format=webphttps://imagemaster.fraazo.com/fraazo-master/products/FBAN14.png?width=256&height=256&format=webp",name:"Robusta Banana",quant:"1kg",price:42,c:1},  
       
      ]
    const [data, setdata] = useState(arr)
    let sum=0;
    for(let i=0;i<data.length;i++){
        sum=sum+(+data[i].price*data[i].c)
    }
    const [totalp, settotalp] = useState(sum)

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
            {slot?<Checkslot/>:""}
            {pay?<Checkpay/>:""}
            {cart?<Checkoutbill cart={cart} data={data} totalp={totalp} settotalp={settotalp} txt={"SELECT ADDRESS"}  showadd={showadd}  showslot={showslot}  showpay={showpay} />:""}
            {add?<Checkoutbill data={data} totalp={totalp} settotalp={settotalp} txt={"SELECT DELIVERY SLOT"} showadd={showadd}  showslot={showslot}  showpay={showpay} />:""}
            {slot?<Checkoutbill data={data} totalp={totalp} settotalp={settotalp} txt={"PLACE ORDER"} showadd={showadd}  showslot={showslot}  showpay={showpay} />:""}
            {pay?<Checkoutbill data={data} totalp={totalp} settotalp={settotalp} />:""}

        </div>
        
    </div>
  )
}

export default Checkoutpage