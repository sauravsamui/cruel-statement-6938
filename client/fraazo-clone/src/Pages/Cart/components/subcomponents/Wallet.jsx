import React from 'react'
import style from "./wallet.module.css"
const Wallet = () => {
    let arr=[
        {src:"https://cdn.razorpay.com/wallet-sq/mobikwik.png",txt:"Mobikwik"},
        {src:"https://cdn.razorpay.com/wallet-sq/payzapp.png",txt:"Payzapp"},
        {src:"https://cdn.razorpay.com/wallet-sq/olamoney.png",txt:"Olamoney"},
        {src:"https://cdn.razorpay.com/wallet-sq/amazonpay.png",txt:"Amazonpay"},
        {src:"https://cdn.razorpay.com/wallet-sq/freecharge.png",txt:"Freecharge"},
        {src:"https://cdn.razorpay.com/wallet-sq/jiomoney.png",txt:"Jiomoney"}

    ]
  return (
    <div>
        <div className={style.walletgrid}>
            {
                arr.map((e,i)=>(
                    <div key={i} >
                        <img src={e.src} alt="" />
                        <p>{e.txt}</p>
                    </div>
                ))
            }
        </div>
         <button className={style.creditbtn}>PAY NOW</button>
    </div>
  )
}

export default Wallet