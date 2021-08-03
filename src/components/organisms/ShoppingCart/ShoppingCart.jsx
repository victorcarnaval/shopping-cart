import React from 'react'

import { useCartContext } from '../../../services/CartContext'

import styles from './ShoppingCart.module.css'
import { Button, Container } from '../../atoms'
import { HeaderForwardPage, ProductCartList } from '..'

const ShoppingCart = () => {
    const { visible, totalDistinctProductsInCart } = useCartContext()

    return visible
        ? (
            <div className={styles.shoppingCart}>
                <HeaderForwardPage name="Cart" />

                <section className={styles.shoppingCartContent}>
                    <Container>
                        <ProductCartList />

                        {totalDistinctProductsInCart > 0 && (
                            <div className={styles.shoppingCartCheckout}>
                                <Button
                                    text="Check Out"
                                    theme="PRIMARY"
                                    onClick={() => console.log('Check Out')}
                                />
                            </div>
                        )}
                    </Container>
                </section>
            </div>
        )
        : null
}

export default ShoppingCart
