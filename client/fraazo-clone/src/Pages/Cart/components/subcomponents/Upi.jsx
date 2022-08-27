import React from 'react'
import style from "./upi.module.css"

const Upi = () => {
  return (
    <div>
        <div>
            <input type="text" placeholder='Enter UPI ID' className={style.upiinp}/>
        </div>
         <button className={style.creditbtn}>PAY NOW</button>
    </div>
  )
}

export default Upi