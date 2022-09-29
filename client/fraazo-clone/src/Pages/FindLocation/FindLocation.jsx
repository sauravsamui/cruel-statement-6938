import React, { useState } from 'react'
import styled from 'styled-components'
import search from "../../assets/svg/search.svg"
import data from "./restaurant.json"
import RestaurantCard from './RestaurantCard'

// Reomove styles from component js
const FindSearchPartStyled = styled.div`
 text-align: center;
 opacity:1;
 z-index:1000000;
 position:fixed;
 height:100vh;
.findMapPart{
    top:0;    
    padding-bottom:5px;
    height:100vh;
    width:450px;
    display:grid;
    background:#f8f8f8;
    grid-template-columns:1fr;
}
.findMapSearch{
    line-height:"1px"
}
.mapDisplaySearch{
    
}
.mapIframe{
    position: -webkit-sticky;
    position: sticky;
    width:100%;
    height:30vh;

}
.inputSearchForLocation{
    width: 100%;
    border:none;
    font-size: 15px;
    text-decoration: italic;
    height:30px;
    outline: none;
}
.inputSearchForLocationDiv{
    position:sticky;
    background:white;
    flex-direction:row;
    align-items:center;
    width:90%;
    margin:auto;
    padding:5px;
    border-radius:5px;
    text-decoration:italic;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.useLocation{
    color:#85ccbd;
    font-size:15px;
    font-weight:500;
    cursor:pointer;
    text-decoration:none;
}
.useLocation:hover{
    text-decoration:none;
}
.browseOurDirectory{
    font-size:17px;
}
.browseOurDirectory1:hover{
    text-decoration:none;
    cursor:pointer;
}
.browseOurDirectoryAddres{
    font-size:17px;
    width:80%;
    margin:auto;
}
.restaurantCard{
    height:45vh;
    overflow:scroll;
    margin:10px;
    
}
/* Hide scrollbar for Chrome, Safari and Opera */
.restaurantCard::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.restaurantCard {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
.inputSearchForLocationImg1{
    height:20px;    
}
.inputSearchForLocationImg2{
    height:25px;
}

`
const FindLocation = ({ keys }) => {
    const [textL, setTextL] = useState("Pune")
    const [address, setAddress] = useState("")
    localStorage.setItem('fraazoUserLoc',  JSON.stringify(address));
    //Geological Location Code for co-ordinates
    const out = (lat, lng) => {
        fetch(`https://us1.locationiq.com/v1/reverse.php?key=pk.456518217705258731c8c7089e3a45d0&lat=${lat}&lon=${lng}&format=json`)
            .then((e) => e.json())
            .then((d) => {
                setAddress(d.display_name)
                setTextL(d)
             })
    }
    
    const handleLocation = (el) => (setTextL(el), setAddress(el));
    const findLocat = (event) => { event.preventDefault() };
    const UseMyGeoLocation = () => { navigator.geolocation.getCurrentPosition(function (position) { out(position.coords.latitude, position.coords.longitude) }) };

    return (
        <div style={{ width: "100vw", zIndex: 1000000, position: "fixed", top: '0', opacity: '1', overflow: 'none' }}>
            <FindSearchPartStyled>
                <div className='findMapPart'>
                    <div className='mapDisplaySearch'>
                        <iframe
                            className='mapIframe'
                            title="Map of City"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAq15HbfCRMW7RqNb5LUNyOLyfzpYI0wl4&q=${textL}`}>
                        </iframe>
                    </div>
                    <div className='findMapSearch'>
                        <p style={{ letterSpacing: "1px", fontFamily: "fantasy", fontSize: "20px" }}>Find Your Nearby Location</p>
                        <p style={{ letterSpacing: "1px", fontFamily: "sans-serif,Roboto", fontWeight: "600", fontSize: "15px" }}>SEARCH BY CITY AND STATE OR ZIP CODE</p>
                        <div className='inputSearchForLocationDiv'>
                            <form onSubmit={findLocat} style={{ display: "flex", alignItems:'center' }} >
                                <img className='inputSearchForLocationImg1' style={{ padding: "0vw 1vw", cursor: "pointer" }} src={search}alt="" />
                                <input className='inputSearchForLocation' type="text" placeholder="Pune, Maharashtra, India" onChange={(e) => handleLocation(e.target.value)} />
                            </form>
                        </div><br />
                        <div style={{display:"flex",padding:'10px', background:'#eff9f7', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}> 
                            <img style={{padding:"0px 20px 0px 10px",marginLeft:"0px", height:'20px'}} src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAxOSAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuMzI3NjA2IDEwLjQ4MjhIMi4wMzEwMUMyLjQ3ODY1IDEzLjg2MjIgNS4xMzc3NiAxNi41MjE0IDguNTE3MTggMTYuOTY5VjE4LjY3MjRDOC41MTc3NiAxOC44NTMyIDguNjY0MTcgMTguOTk5NCA4Ljg0NDc5IDE5SDEwLjE1NTJDMTAuMzM1OCAxOC45OTk0IDEwLjQ4MjIgMTguODUzMiAxMC40ODI4IDE4LjY3MjRWMTYuOTY5QzEzLjg2MjIgMTYuNTIxNCAxNi41MjE0IDEzLjg2MjIgMTYuOTY5IDEwLjQ4MjhIMTguNjcyNEMxOC44NTMyIDEwLjQ4MjIgMTguOTk5NCAxMC4zMzU4IDE5IDEwLjE1NTJWOC44NDQ3OUMxOC45OTk0IDguNjY0MTcgMTguODUzMiA4LjUxNzc2IDE4LjY3MjQgOC41MTcxOEgxNi45NjlDMTYuNTIxNCA1LjEzNzc2IDEzLjg2MjIgMi40Nzg2NSAxMC40ODI4IDIuMDMxMDFWMC4zMjc2MDZDMTAuNDgyMiAwLjE0Njg0MyAxMC4zMzU4IDAuMDAwNTc5ODM0IDEwLjE1NTIgMEg4Ljg0NDc5QzguNjY0MTcgMC4wMDA1Nzk4MzQgOC41MTc3NiAwLjE0Njg0MyA4LjUxNzE4IDAuMzI3NjA2VjIuMDMxMDFDNS4xMzc3NiAyLjQ3ODY1IDIuNDc4NjUgNS4xMzc3NiAyLjAzMTAxIDguNTE3MThIMC4zMjc2MDZDMC4xNDY4NDMgOC41MTc3NiAwLjAwMDU3OTgzNCA4LjY2NDE3IDAgOC44NDQ3OVYxMC4xNTUyQzAuMDAwNTc5ODM0IDEwLjMzNTggMC4xNDY4NDMgMTAuNDgyMiAwLjMyNzYwNiAxMC40ODI4Wk05LjUgMy45MzA5OEMxMi41NzU2IDMuOTMwOTggMTUuMDY5IDYuNDI0NDIgMTUuMDY5IDkuNUMxNS4wNjkgMTIuNTc1NiAxMi41NzU2IDE1LjA2OSA5LjUgMTUuMDY5QzYuNDI0NDIgMTUuMDY5IDMuOTMwOTggMTIuNTc1NiAzLjkzMDk4IDkuNUMzLjkzNTMzIDYuNDI2MTUgNi40MjYxNSAzLjkzNTMzIDkuNSAzLjkzMDk4WiIgZmlsbD0iIzVEQzZBRCIvPgo8cGF0aCBkPSJNMTIuMTIwMyA5LjUwMDFDMTIuMTIwMyAxMC45NDc1IDEwLjk0NyAxMi4xMjA4IDkuNDk5NjEgMTIuMTIwOEM4LjA1MjIgMTIuMTIwOCA2Ljg3ODkxIDEwLjk0NzUgNi44Nzg5MSA5LjUwMDFDNi44Nzg5MSA4LjA1MjY5IDguMDUyMiA2Ljg3OTM5IDkuNDk5NjEgNi44NzkzOUMxMC45NDcgNi44NzkzOSAxMi4xMjAzIDguMDUyNjkgMTIuMTIwMyA5LjUwMDFaIiBmaWxsPSIjNURDNkFEIi8+Cjwvc3ZnPgo=' alt='gps' />
                            <u className="useLocation" onClick={UseMyGeoLocation}>Use My Current Location</u>
                        </div>

                        <div className="browseOurDirectory"> <br />
                            {address ? (
                                <>
                                    <div className="browseOurDirectoryAddres"><b>Current Location:</b> {address}</div>
                                    <div className='restaurantCard'>
                                        {
                                            data.restaurantDetails.map((e) => <RestaurantCard key={e.contact} {...e} />)
                                        }
                                    </div>
                                </>
                            ) : (
                                <>
                                    Use our locator to find a location near you or <u className="browseOurDirectory1">browse our directory. </u>
                                </>
                            )}
                        </div>
                    </div>

                </div>
            </FindSearchPartStyled>
            <div style={{
                height: '100vh',
                width: "100vw",
                background: "black",
                opacity: "0.6"
            }}
            onClick={keys}
            ></div>
        </div>
    )
}

export default FindLocation;