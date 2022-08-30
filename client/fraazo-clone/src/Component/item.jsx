import React from "react";
import {Link} from "react-router-dom";
import style from "./item.module.css";
const Item = ({ e,onClose,setQuery}) => {


  return (
    <div key={e._id}>
      <Link to={`/productsdetails/${e._id}`}> <div key={e._id} className={style.itemmain} onClick={()=>{
        onClose();
        setQuery("");
       }}>
          <div className={style.smainitem}>
          <img src={e.src} alt="img" />
          <div className={style.itmnqp}>
              <p className={style.txtname}>{e.name}</p>
             <p  className={style.txtquant}>{e.quantity} qty</p>
              <p  className={style.txtprice}><i className="fa-solid fa-indian-rupee-sign"></i> {e.price}</p>
            </div>
          </div>
          
           
         
        </div></Link>
      
    </div>
  );
};

export default Item;
