import React from 'react'
import styles from "./wishlist.module.css"
import ProductCard from '../../components/ProductCard/ProductCard'
import { data } from './data'

const wishlist = () => {

    return (
        <div className={styles.wishlist}>
            <div className={styles.container}>

                {data.map((item) => (
                    <ProductCard item={item} key={item.id} />
                ))}

            </div>
        </div>
    )
}

export default wishlist