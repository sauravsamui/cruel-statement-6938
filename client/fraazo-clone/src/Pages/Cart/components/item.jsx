import React, { useState } from "react";
import { useEffect } from "react";
import style from "./item.module.css";
const Item = ({ e,totalp,data,setdata,settotalp }) => {
 

 
  
  const [a, seta] = useState(e.c);
  let removeelement=()=>{

  }

  return (
    <div>
      {
        <div key={e.id} className={style.itemmain}>
          <div className={style.smainitem}>
            <img src={e.src} alt="" />
            <div>
              <p className={style.txtname}>{e.name}</p>
              <p  className={style.txtquant}>{e.quant}</p>
              <p  className={style.txtprice}><i class="fa-solid fa-indian-rupee-sign"></i> {e.price}</p>
            </div>
          </div>
          <div>
            <p className={style.remtxt} onClick={removeelement}>Remove</p>
            <div className={style.quantcarr}>
              <div
                className={style.decs}
                
                onClick={() => {
                  
                  
                  {a>1?e.c = e.c - 1 :e.c=e.c}
                  seta(e.c)
                  let sum=0;
                  for(let i=0;i<data.length;i++){
                      sum=sum+(+data[i].price*data[i].c)
                  }
                  settotalp(sum)
                  setdata(data)
                
                  
               
                }}
              >
                -
              </div>
              <p>{a}</p>
              <div
                className={style.incs}
                onClick={() => {
                  {a>=1?e.c = e.c + 1 :e.c=e.c}
                  seta(e.c);
                  let sum=0;
                  for(let i=0;i<data.length;i++){
                      sum=sum+(+data[i].price*data[i].c)
                  }
                  settotalp(sum)
                  setdata(data)
                
                  
                }}
              >
                +
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Item;
