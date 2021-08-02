import React from 'react'

import { useCartContext } from '../../../services/CartContext'

import styles from './ButtonCart.module.css'
import { InformationCart } from '../../atoms'

const ButtonCart = () => {
    const { toggleCart, totalDistinctProductsInCart, visible } = useCartContext()
    const icon = totalDistinctProductsInCart ? 'fullCart' : 'emptyCart'

    return !visible
        ? (
            <div className={`${styles.buttonCartWrapper} ${styles[icon]}`}>
                <button
                    type="button"
                    onClick={toggleCart}
                    className={styles.buttonCart}
                />

                <div className={styles.buttonCartInfo}>
                    <InformationCart />
                </div>            
            </div>
        )
        : null
}

export default React.memo(ButtonCart)
