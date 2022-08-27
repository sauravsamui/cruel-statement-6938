import React from 'react'
import Fruits from "../../HomePageAssets/Fruits.webp"
import Vegetables from "../../HomePageAssets/Vegetables.webp"
import styles from "./CenterImages.module.css"
import { NavLink } from "react-router-dom"

const CenterImages = () => {
    return (
        <div className={styles.centerImagesContainer} >
            <NavLink to= "/products">
                <img className={styles.centerFruit} src={Fruits} alt="fruits" />
            </NavLink>
            <NavLink to= "products">
                <img className={styles.centerVegetables} src={Vegetables} alt="vegetables" />
            </NavLink>

        </div>
    )
}

export default CenterImages