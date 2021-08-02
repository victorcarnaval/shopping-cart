import React from 'react'

import { useCartContext } from '../../../services/CartContext'

import styles from './ProductCartList.module.css'
import { ProductCart } from '../../molecules'
import { TextHelper } from '../../atoms'

const ProductCartList = () => {
    const { productsInCart } = useCartContext()

    return productsInCart.length > 0
        ? (
            <ul className={styles.productCartList}>
                {productsInCart.map(({id, image, name, price, stock }) => (
                    <li key={id}>
                        <ProductCart
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
        : <TextHelper text="Seu carrinho está vazio." />
}

export default ProductCartList
