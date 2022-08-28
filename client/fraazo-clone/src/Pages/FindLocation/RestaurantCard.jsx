import React from 'react'
import styled from 'styled-components'
import tick from "../../assets/svg/tick.svg"
 
const RestaurantCardStyling = styled.div`
.cardStylingMainDiv{
    height:fit-content;
    line-height:1;
    width:90%; 
    padding:10px;
    margin:10px;
    margin:auto;
}
.cardStylingMainDiv:hover{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
h1{
    font-size:35px;
    font-weight:400;
    font-Family:fantasy;
}
h3{
    color:#db343b;
}
h3:hover{
    text-decoration:none;
}
.optionsCWD{
    display:flex;
    text-align:center;
    margin:auto;
    justify-content:center;
    gap:5%;
    font-size:10px;
}
.cardUnderlineHower:hover{
    text-decoration:none;
    cursor:pointer;
}
`
const RestaurantCard = ({ title, time, address, contact, catering, wifi, delivery }) => {
    // console.log(title,time,address,contact,catering,wifi,delivery)
    return (
        <RestaurantCardStyling>
            <div className='cardStylingMainDiv'>
                <h1 style={{fontSize:'20px'}}><u>{title}</u></h1>
                <h6 style={{fontSize:'15px'}}>{`Open Now: Closes at ${time}`}</h6>
                <p style={{fontSize:'15px', color:"grey"}}>{address}</p>
                <p style={{fontSize:'13px'}}>{contact}</p>
                <div className='optionsCWD'>
                    {catering && <p><img style={{ padding: "0px", cursor: "pointer", height:"20px"  }} className="cardUnderlineHower" src={tick} alt="" />Catering</p>}
                    {wifi && <p><img style={{ padding: "0px", cursor: "pointer", height:"20px"  }} className="cardUnderlineHower" src={tick} alt="" />WiFi</p>}
                    {delivery && <p><img style={{ padding: "0px", cursor: "pointer", height:"20px"  }} className="cardUnderlineHower" src={tick} alt="" />Delivery</p>}
                </div>
                <h3 className="cardUnderlineHower"><u className="cardUnderlineHower" style={{fontSize:'12px'}}>GET DIRECTIONS</u></h3>
                <h3 className="cardUnderlineHower"><u className="cardUnderlineHower" style={{fontSize:'12px'}}>DELIVERY</u></h3>
            </div>
        </RestaurantCardStyling>
    )
}

export default RestaurantCard