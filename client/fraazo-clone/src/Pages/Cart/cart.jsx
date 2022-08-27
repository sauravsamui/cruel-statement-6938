import React, { useState } from 'react'
import Cartdraw from '../components/cartdraw'
import Checkoutpage from '../components/Checkoutpage'

export const Cart = () => {
    const [flag, setflag] = useState(false)
  const arr=[
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
        <button onClick={()=>setflag(!flag)}>cart</button>
        {flag?<Cartdraw flag={flag} setflag={setflag} data={data} setdata={setdata} totalp={totalp} settotalp={settotalp}/>:""}
        <Checkoutpage data={data} setdata={setdata} totalp={totalp} settotalp={settotalp}/>
    </div>
  )
}
