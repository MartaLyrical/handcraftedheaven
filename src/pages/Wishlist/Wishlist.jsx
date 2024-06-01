import React from 'react'
import "./wishlist.scss"
import ProductCard from '../../components/ProductCard/ProductCard'
import { data } from './data'

const wishlist = () => {

    return (
        <div className='wishlist'>
            <div class="container">

                {data.map((item) => (
                    <ProductCard item={item} key={item.id} />
                ))}

            </div>
        </div>
    )
}

export default wishlist