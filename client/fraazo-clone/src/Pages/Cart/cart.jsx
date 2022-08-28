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
 
 
  
useEffect(() => {
  dispatch(getCartItemApi(user));

  return () => {
    
  }
}, [user])


  let sum=0;
  for(let i=0;i<cartData.length;i++){
    sum=sum+(+cartData[i].payload.price*cartData[i].payload.quantity)
  }
 
  return (
    <div> 
   
        {cartflag?<Cartdraw cartflag={cartflag} setcartflag={setcartflag} />:""}
        {/* <Checkoutpage data={data} setdata={setdata} totalp={totalp} settotalp={settotalp}/> */}
    </div>
  )
}
