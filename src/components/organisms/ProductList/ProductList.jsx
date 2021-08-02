import React from 'react'

import { useCartContext } from '../../../services/CartContext'

import styles from './ProductList.module.css'
import { Product } from '../../molecules'

const ProductList = () => {
    const { products } = useCartContext()

    return (
        <ul className={styles.productList}>
            {products.map(({id, image, name, price, stock }) => (
                <li key={id}>
                    <Product
                        id={id}
                        image={image}
                        name={name}
                        price={price}
                        stock={stock}
                    />
                </li>
            ))}
        </ul>
    )
}

export default ProductList
