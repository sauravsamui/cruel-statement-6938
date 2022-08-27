import React, { useState } from 'react'
import style from "./checkslot.module.css"
const Checkslot = () => {
    // const [date, setdate] = useState(new Date())
    let x=new Date().toString().trim().split(" ");
    let date=[]
    for(let i=1;i<4;i++){
        if(i==2){
            date.push(+x[i]+1)
        }else{
            date.push(x[i])
        }
       
    }
    console.log(date)
    const [col, setcol] = useState(false)

    let arr=["8.00 AM - 10:00 AM","11.00 AM - 1:00 PM","1.30 PM - 3:00 PM","3.30 AM - 5:00 PM","6.00 PM - 8:00 PM","9.00 PM - 11:00 PM",]

  return (
    <div className={style.csmain}>
        <div className={style.cssubmain}>
            <h1>Delivery Type</h1>
            <div className={style.csflx}>
                <div className={style.csed}>
                    <h2>Express Delivery</h2>
                    <p className={style.edgray}>90 min Express</p>
                </div>
                <div className={style.cssyd}>
                    <h2>Schedule Your Delivery</h2>
                    <div className={style.csdtdiv}>
                        <p className={style.date}>Tommorow, {date.join(", ")}</p>
                        <p className={style.edttxt}>Edit</p>
                    </div>
                    
                    <div className={style.csgrid} >
                        {
                            arr.map((e,i)=>(
                                <div key={i} >
                                    {e}
                                </div>
                            ))
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkslot