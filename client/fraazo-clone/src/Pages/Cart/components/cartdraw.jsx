import React, { useEffect, useState } from 'react'
import Item from './item.jsx'
import style from "./cartdraw.module.css"

const Cartdraw = ({flag,setflag,data,setdata,totalp,settotalp}) => {
    
    
    

  return (
    
    <div className={style.cdf}>
        <div className={style.mcd}>
            <div>
            <div className={style.txtflx}>
                <h1 className={style.ic}>My Cart ({data.length} items)</h1>
                <h3 onClick={()=>setflag(!flag)}>X</h3>
            </div>
                
            
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