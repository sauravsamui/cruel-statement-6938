import React, { useEffect, useState } from 'react'
import Item from './item'
import style from "./cartdraw.module.css"

const Cartdraw = ({flag,setflag,data,setdata,totalp,settotalp}) => {
    
   
    
    
    // let sum=0;
    // for(let i=0;i<data.length;i++){
    //     sum=sum+(+data[i].price*data[i].c)
    // }
    // const [totalp, settotalp] = useState(sum)
    // // let x=sum
    // localStorage.setItem("tot",sum)
    // useEffect(()=>{
    //     x=sum
    //     console.log(x)
    // },[sum])
    
    

  return (
    
    <div className={style.cdf}>
        <div className={style.mcd}>
            <div>
            
                <h1 className={style.ic}>My Cart ({data.length} items)</h1>
            
                {
                    data.map((e)=>(
                        
                            <Item e={e} key={e.id} totalp={totalp} data={data} setdata={setdata} settotalp={settotalp}/>
                        
                    ))
                }
            </div>
            <div className={style.cdbotm}>
                <div>
                    <p>{data.length} items</p>
                    <p className={style.txtorange}><i class="fa-solid fa-indian-rupee-sign"></i> {totalp}</p>
                </div>
                <div>
                    <button className={style.cdbtn}>Checkout</button>
                </div>
            </div>
            
            
        </div>
    </div>
  )
}

export default Cartdraw