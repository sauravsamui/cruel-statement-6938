import React from 'react'
import styles from "./Vegetables.module.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {NavLink} from "react-router-dom"
import Item from './Item'
import { useSelector } from 'react-redux'
import { Spinner } from '@chakra-ui/react';

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
  const {data:products,loading} = useSelector((state)=>state.product)


  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
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
        breakpoint: 380,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  let dailyveggies = products.filter((el) => { return el.category === "DailyVeges" })
  return (
    <div style={{ marginTop: "100px" }}>
      <div className={styles.sideHeading}>
        <p style={{ fontSize: "30px", fontWeight: "300" }}>VEGETABLES</p>
        <NavLink to ="/products">
        <p className = {styles.viewall}>(View All)</p>
        </NavLink>
      </div>
      <hr style={{ width: "90%", margin: "auto" }} />
      <div style={{ width: "90%", margin: "auto", marginTop: "25px" }}>
        <Slider {...settings}>
          {dailyveggies.map((item) => (
           
            <Item key={item._id} item={item} styles={styles} loading={loading}/>
           
          ))}
        </Slider>
      </div>


    </div>

  )
}

export default Vegetables