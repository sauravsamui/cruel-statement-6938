import React from 'react'
import Item from './item'
import style from "./checkcart.module.css"
import { useSelector } from 'react-redux';

const Checkcart = () => {
  const {cartData: data } = useSelector((state) => state.cart);
  return (
    <div className={style.ccc}>
        <div className={style.checkcartcar}>
          <h1 className={style.ccl}>Cart items: <span>{data.length}</span></h1>
            {
                data.map((e)=>(
                  <Item e={e} key={e._id}/>
                ))
            }
        </div>
    </div>
  )
}

export default Checkcart