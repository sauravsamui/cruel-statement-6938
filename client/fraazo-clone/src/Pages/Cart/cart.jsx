import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartItemApi } from '../../Store/Cart/cart.actions'
import Cartdraw from './components/cartdraw'
import Checkoutpage from './components/Checkoutpage'

export const Cart = ({cartflag,setcartflag}) => {
  let UserStoredDataFraazo = JSON.parse(localStorage.getItem('UserStoredDataFraazo')) || {}
  let loggedInAlready = Object.keys(UserStoredDataFraazo).length;
  let user = 123456789123;
  if(loggedInAlready){
      user = UserStoredDataFraazo.newSavedNo._id
  }
    const dispatch = useDispatch();
   const {cartData} = useSelector((state)=>state.cart);
  
  const [data, setdata] = useState();
  
useEffect(() => {
  dispatch(getCartItemApi(user));

  return () => {
    
  }
}, [user])


  let sum=0;
  for(let i=0;i<cartData.length;i++){
    sum=sum+(+cartData[i].payload.price*cartData[i].payload.quantity)
  }
  // const [totalp, settotalp] = useState(sum)
  
//   if(getItemCart.loading){
    
//     return (
        
        
//     <div className='container'>
//      <div className="spinner-grow text-primary" role="status">
//    <span className="sr-only"></span>
//  </div>
//  <div className="spinner-grow text-secondary" role="status">
//    <span className="sr-only"></span>
//  </div>
//  <div className="spinner-grow text-success" role="status">
//    <span className="sr-only"></span>
//  </div>
//  <div className="spinner-grow text-danger" role="status">
//    <span className="sr-only"></span>
//  </div>
//  <div className="spinner-grow text-warning" role="status">
//    <span className="sr-only"></span>
//  </div>
//  <div className="spinner-grow text-info" role="status">
//    <span className="sr-only"></span>
//  </div>
//  <div className="spinner-grow text-light" role="status">
//    <span className="sr-only"></span>
//  </div>
//  <div className="spinner-grow text-dark" role="status">
//    <span className="sr-only"></span>
//  </div>
//  </div>

      

//     )
//   }
//   else if(getItemCart.error){
//     return (
        
//       <div style={{alignItems:"center"}} className='container'>
 
//       <h2  className="h2">Something went wrong.....</h2>
//     </div>
   
//     )
  
//   }
  return (
    <div> 
   
        {cartflag?<Cartdraw cartflag={cartflag} setcartflag={setcartflag} setdata={setdata} />:""}
        {/* <Checkoutpage data={data} setdata={setdata} totalp={totalp} settotalp={settotalp}/> */}
    </div>
  )
}
