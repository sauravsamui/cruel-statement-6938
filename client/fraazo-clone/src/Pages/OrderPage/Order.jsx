import React from 'react'
import LeftMenu from './LeftMenu'
import styles from "./order.module.css"
import OrderItems from './OrderItems'



const Order = () => {
 

  return (
     
    <div id={styles.con} className="container">
   <LeftMenu/>

    <OrderItems/>

  </div>
          
        

        


       
    
  )
}

export default Order