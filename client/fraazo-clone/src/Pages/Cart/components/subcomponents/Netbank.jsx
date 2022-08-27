import React from 'react'
import style from "./netbank.module.css"
const Netbank = () => {
  return (
    <div>
        <div>
            <select name="" id="" className={style.nbselect}>
                <option value="">Select Bank</option>
                <option value="">Kotak Mahindra Bnk</option>
                <option value="">Punjab National Bank</option>
                <option value="">SBI</option>
                <option value="">Indusind Bank</option>
            </select>
        </div>
         <button className={style.creditbtn}>PAY NOW</button>
    </div>
  )
}

export default Netbank