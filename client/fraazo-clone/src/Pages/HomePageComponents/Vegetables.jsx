import React from 'react'
import styles from "./Vegetables.module.css"
import { BsFillCartPlusFill } from "react-icons/bs"
import { useState, useEffect } from "react"
import axios from "axios"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray" }}
        onClick={onClick}
      />
    );
  }

const Vegetables = () => {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        axios.get(`https://serene-hollows-15248.herokuapp.com/products/all`)
            .then(res => { setProducts(res.data.data) })
            .catch(err => { console.log(err) })
    }, [])
    // console.log(products)
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    let dailyveggies = products.filter((el)=>{return el.category === "DailyVeges"})
    return (
        <div  style ={{marginTop:"100px"}}>
        <div className={styles.sideHeading}>
          <p style={{ fontSize: "30px", fontWeight: "300" }}>VEGETABLES</p>
          <p style={{ color: "#fd7e14", cursor: "pointer", marginLeft: "10px" }}>(View All)</p>
        </div>
        <hr style = {{width:"90%",margin:"auto"}} />
        <div style={{ width: "90%", margin: "auto", marginTop:"25px" }}>
          <Slider {...settings}>
            {dailyveggies.map((item) =>  (
              <div key= {item._id} className={styles.card}>
                <div className={styles.cardTop}>
                  <img style={{ backgroundColor: "rgb(249,249,249)" }} src={item.src} alt={item.name} />
                </div>
                <div className={styles.cardBottom}>
                  <p style ={{marginLeft:"5px"}}>{item.name}</p>
                  <div style={{ marginTop: "10px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ display: "flex", marginLeft:"5px" }}>
                        <p>{item.quantity}</p>
                      </div>
                      <p style ={{marginLeft:"5px"}}>₹ {item.price}</p>
                    </div>
                    <div style={{ width: "120px", display: "flex" }}>
  
                      <button style={{ fontSize: "12px", width: "80px", height: "30px", display: "flex", alignItems: "center", border: "1px solid green", borderRadius: "15px", marginLeft: "20px", justifyContent: "space-around" }}>
                        <BsFillCartPlusFill style={{ color: "green" }} />  <p style ={{color:"green"}}>ADD</p>
                      </button>
  
  
                    </div>
                  </div>
  
                </div>
              </div>
            ))}
          </Slider>
        </div>
  
  
      </div>
  
    )
}

export default Vegetables