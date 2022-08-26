import React from 'react'
import Fruits from "../../HomePageAssets/Fruits.webp"
import Vegetables from "../../HomePageAssets/Vegetables.webp"
import styles from "./CenterImages.module.css"
import { Link } from "react-router-dom"

const CenterImages = () => {
    return (
        <div className={styles.centerImagesContainer} >
            <Link to={`/products/fruits`}>
                <img className={styles.centerFruit} src={Fruits} alt="fruits" />
            </Link>
            <Link to={`/products/vegetables`}>
                <img className={styles.centerVegetables} src={Vegetables} alt="vegetables" />
            </Link>

        </div>
    )
}

export default CenterImages