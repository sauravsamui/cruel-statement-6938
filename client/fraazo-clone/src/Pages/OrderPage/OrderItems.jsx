import React, { useEffect } from 'react'
import OrderItem from './OrderItem';
import {useDispatch, useSelector} from "react-redux";
import { getOrderApi } from '../../Store/order/order.action';
import styles from "./order.module.css"
import style from "./cart.module.css";
import {Link} from "react-router-dom"
const OrderItems = () => {
    let id =2; //need to get from local storage;
    const dispatch = useDispatch()
    const {getOrder:{loading,error},data} = useSelector((state)=>state.order)
    const {isAuth} = useSelector((state)=>state.auth);
    
  //   useEffect(() => {
  //     if(isAuth){
  //       let UserStoredDataFraazo = JSON.parse(localStorage.getItem('UserStoredDataFraazo')) || {}
  //       let loggedInAlready = Object.keys(UserStoredDataFraazo).length;
  //       let user = 123456789123;
  //       if(loggedInAlready){
  //           user = UserStoredDataFraazo.newSavedNo._id
  //       }
  //   dispatch(getOrderApi(user))
  // }
  //     return () => {
       
  //     }
  //   }, [])//id of user
    
    let  total1 = data.reduce((acu,el)=>(Number(acu)+(Number(el.price) * Number(el.quantity))),0)
    
  if(loading){
    return (
        <div id={styles.loading} className='container'>
     <div className="spinner-grow text-primary" role="status">
   <span className="sr-only"></span>
 </div>
 <div className="spinner-grow text-secondary" role="status">
   <span className="sr-only"></span>
 </div>
 <div className="spinner-grow text-success" role="status">
   <span className="sr-only"></span>
 </div>
 <div className="spinner-grow text-danger" role="status">
   <span className="sr-only"></span>
 </div>
 <div className="spinner-grow text-warning" role="status">
   <span className="sr-only"></span>
 </div>
 <div className="spinner-grow text-info" role="status">
   <span className="sr-only"></span>
 </div>
 <div className="spinner-grow text-light" role="status">
   <span className="sr-only"></span>
 </div>
 <div className="spinner-grow text-dark" role="status">
   <span className="sr-only"></span>
 </div>
 </div>
    )
  }
  else if(error){
    return (
  <div className='container'>
 
   <h2  className="h2">Something went wrong.....</h2>
    </div>
    )
  
  }else if(data.length<=0){
    return(
       <div id={styles.innerLeftDiv} className="container">
         
         <img
           id={styles.img2}
           src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-4816550-4004141.png"
           alt="img"
           class="img-fluid img-thumbnail"
         />
 
      <p className='h3'>Empty cart</p>
      <Link to={"/"} class="btn btn-primary btn-lg " role="button" aria-disabled="true">Go to Home</Link>
      
       </div>
    )
  }

  return (
    <div className="container-fluid">
    <div className="container-sm">
     <h2  className="h2">Your Orders</h2>
 
      <div id={style.rightInnerDiv} className='container-md'>
    {
       data.map((el)=>(
         <OrderItem key={el._id} item={el} />
       ))
     }
     </div>
     <h2 style={{marginTop:"10px"}} className="h2">Total: {`₹${total1.toFixed(2)}`}</h2>
    </div>
    
 </div>
  )
}

export default OrderItems