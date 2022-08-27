import React from 'react'
import Item from './item'
import style from "./checkcart.module.css"

const Checkcart = ({data,setdata,totalp,settotalp}) => {
  
  return (
    <div className={style.ccc}>
        <div className={style.checkcartcar}>
          <h1 className={style.ccl}>Cart items: <span>{data.length}</span></h1>
            {
                data.map((e)=>(
                  <Item e={e} key={e.id} totalp={totalp} data={data} setdata={setdata} settotalp={settotalp}/>
                ))
            }
        </div>
    </div>
  )
}

export default Checkcart