import React from 'react'
import styles from "./BestDeals.module.css"
import { BsFillCartPlusFill } from "react-icons/bs"
import { useState, useEffect } from "react"
import axios from "axios"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom"
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
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(`https://serene-hollows-15248.herokuapp.com/products/all`)
            .then(res => { setProducts(res.data.data) })
            .catch(err => { console.log(err) })
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
                breakpoint: 480,
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
    return (
        <>
            <div className={styles.sideHeading}>
                <h2 className={styles.heading}>BEST DEALS</h2>
            </div>
            <hr style={{ width: "90%", margin: "auto" }} />
            <div  style={{ width: "90%", margin: "auto", marginTop: "25px" }}>
                <Slider {...settings}>
                    {comboVeggies.map((item) => (
                        <Link to={`/productsdetails/${item._id}`}>
                        <div key={item._id} className={styles.card}>
                            <div className={styles.cardTop}>
                                <img style={{ backgroundColor: "rgb(249,249,249)"}} src={item.src} alt={item.name} />
                            </div>
                            <div className={styles.cardBottom}>
                                <p style={{ marginLeft: "5px", fontSize:"14px",color:"#1a201e"  }}>{item.name}</p>
                                <div style={{ marginTop: "10px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <div>
                                        <div style={{ display: "flex", marginLeft: "5px" }}>
                                            <p style={{ color: "#222", fontSize: "13px" }}>{item.quantity} qty</p>
                                        </div>
                                        <p style={{ marginLeft: "5px", fontWeight: "500", color: "#000" }}>₹ {item.price}</p>
                                    </div>
                                    <div className={styles.btnContainer} style={{ width: "120px", display: "flex" }}>
                                        <div className={styles.btnAdd}>
                                            <div className={styles.cartBtn}>
                                                <BsFillCartPlusFill />
                                            </div>
                                            <p> ADD</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Link>
                    ))}
                </Slider>
            </div>

        </>
    )
}

export default BestDeals