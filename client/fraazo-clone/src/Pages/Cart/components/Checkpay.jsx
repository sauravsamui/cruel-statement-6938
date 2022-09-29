import React, { useState } from 'react'
import style from "./checkpay.module.css"
import Cash from './subcomponents/Cash'
import Credit from './subcomponents/Credit'
import Netbank from './subcomponents/Netbank'
import Sudexo from './subcomponents/Sudexo'
import Upi from './subcomponents/Upi'
import Wallet from './subcomponents/Wallet'

// separate condtionals
const Checkpay = () => {
  const [credit, setcredit] = useState(true)
  const [sudexo, setsudexo] = useState(false)
  const [netbank, setnetbank] = useState(false)
  const [wallet, setwallet] = useState(false)
  const [upi, setupi] = useState(false)
  const [cash, setcash] = useState(false)
  let showcredit=()=>{
      setcredit(true);
      setsudexo(false)
      setnetbank(false)
      setwallet(false)
      setupi(false)
      setcash(false)
  }
  let showsudexo=()=>{
    setcredit(false);
    setsudexo(true)
    setnetbank(false)
    setwallet(false)
    setupi(false)
    setcash(false)
    
  }
  let shownetbank=()=>{
    setcredit(false);
    setsudexo(false)
    setnetbank(true)
    setwallet(false)
    setupi(false)
    setcash(false)
    
  }
  let showwallet=()=>{
    setcredit(false);
    setsudexo(false)
    setnetbank(false)
    setwallet(true)
    setupi(false)
    setcash(false)
    
  }
  let showupi=()=>{
    setcredit(false);
    setsudexo(false)
    setnetbank(false)
    setwallet(false)
    setupi(true)
    setcash(false)
    
  }

  let showcash=()=>{
    setcredit(false);
    setsudexo(false)
    setnetbank(false)
    setwallet(false)
    setupi(false)
    setcash(true)
    
  }
  return (
    <div className={style.cpmain}>
      <h1 className={style.cph1}>Payments</h1>
      <div className={style.cpmainflex} >
        
        <div className={style.cpleft}>
          <div onClick={showcredit} className={credit?style.colcpleft:style.cpleftdiv} >
            <p>Credit / Debit Cards</p>
          </div>
          <div onClick={showsudexo} className={sudexo?style.colcpleft:style.cpleftdiv}>
            <p>Sudexo Cards</p>
          </div>
          <div onClick={shownetbank} className={netbank?style.colcpleft:style.cpleftdiv}>
            <p>Net Banking</p>
          </div>
          <div onClick={showwallet} className={wallet?style.colcpleft:style.cpleftdiv}>
            <p>Wallets</p>
          </div>
          <div onClick={showupi} className={upi?style.colcpleft:style.cpleftdiv}>
            <p>UPI</p>
          </div>
          <div onClick={showcash} className={cash?style.colcpleft:style.cpleftdiv}>
            <p>Cash</p>
          </div>
        </div>
        <div className={style.cpright}>
            {credit?<Credit/>:""}
            {sudexo?<Sudexo/>:""}
            {netbank?<Netbank/>:""}
            {wallet?<Wallet/>:""}
            {upi?<Upi/>:""}
            {cash?<Cash/>:""}
        </div>
      </div>
    </div>
  )
}

export default Checkpay