import React from 'react'
import styles from './ProductCard.module.scss'


const ProductCard = ({tag, image, title, price, burl, murl, style}) => {

    return (
        <div className = {styles.card}  style={style}>
            <div className={styles.card__tag}>
                <span>{tag}</span>
            </div>

            <div className = {styles.card__image} >
               <img src={image} alt="bk2" />
            </div>

            <div className={styles.card__column}>
                <div className = {styles.card__column__text} >
                    <span>{title}</span>
                    <h1>{price}</h1>
                </div>

                <div className = {styles.card__column__btn}>
                    <a href={burl}><button>Buy</button></a>
                    <a href={murl}><button>More</button></a>
                </div>
            </div>

        </div>
    )
}

export default ProductCard
