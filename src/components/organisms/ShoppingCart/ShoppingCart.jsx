import React from 'react'

import { useCartContext } from '../../../services/CartContext'

import styles from './ShoppingCart.module.css'
import { Container } from '../../atoms'
import { HeaderForwardPage } from '..'

const ShoppingCart = () => {
    const { visible } = useCartContext()
    
    return visible
        ? (
            <div className={styles.shoppingCart}>
                <HeaderForwardPage name="Cart" />

                <section className={styles.shoppingCartContent}>
                    <Container>
                        <h2>ITEMS_HERE</h2>
                    </Container>
                </section>
            </div>
        )
        : null
}

export default ShoppingCart
