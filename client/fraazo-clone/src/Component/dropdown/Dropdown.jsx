import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import style from "./dropdown.module.css"

const Dropdown = () => {
    const navigate=useNavigate()
    // If variable name is not too long , always try with naming showing complete meaning
    const [ft, setft] = useState(false)
    const [vt, setvt] = useState(false)
    let gotoprod=()=>{
        navigate("/products")
    }
  return (
    <div className={style.ddmain}>
        <div className={style.ddflx}>
            <p className={!ft?style.fruits:style.frot} onClick={gotoprod} onMouseOver={()=>setft(true)} onMouseLeave={()=>setft(false)}>Fruits <i class="fa-solid fa-angle-down"></i></p>
            <p className={!vt?style.vegetables:style.vrot}  onClick={gotoprod} onMouseOver={()=>setvt(true)} onMouseLeave={()=>setvt(false)}>Vegetables <i class="fa-solid fa-angle-down"></i></p>
        </div>
    </div>
  )
}

export default Dropdown