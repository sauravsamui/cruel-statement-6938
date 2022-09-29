import React from 'react';
import styles from "./BestDeals.module.css";
import { useEffect } from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Item from './Item'
import { useDispatch, useSelector } from 'react-redux'
import { showProducts } from '../../Store/Products/products.action'


// Slider can imported form a common components
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


const BestDeals = () => {
const dispatch = useDispatch();   
const {data:products,loading} = useSelector((state)=>state.product)

    useEffect(() => {
         dispatch(showProducts())
    }, [])
    let comboVeggies = products.filter((el) => { return el.category === "ComboVeges" })
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
                breakpoint: 450,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              }
        ]
    };
    return (
        <>
            <div className={styles.sideHeading}>
                <h2 className={styles.heading}>BEST DEALS</h2>
            </div>
            <hr style={{ width: "90%", margin: "auto" }} />
            <div  style={{ width: "90%", margin: "auto", marginTop: "25px" }}>
                <Slider {...settings}>
                    {comboVeggies.map((item) => (
                         <Item key={item._id} item={item} styles={styles} loading={loading}/>
                    ))}
                </Slider>
            </div>

        </>
    )
}

export default BestDeals