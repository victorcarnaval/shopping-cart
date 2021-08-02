import React from 'react'

import { useCartContext } from '../../../services/CartContext'

import styles from './InformationCart.module.css'

const InformationCart = () => {
    const { totalProductsInCart } = useCartContext()

    return (
        <span className={styles.informationCart}>{totalProductsInCart}</span>
    )
}

export default React.memo(InformationCart)
