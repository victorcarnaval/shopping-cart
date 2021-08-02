import React from 'react'

import { CartProvider } from '../../../services/CartContext'

import { ButtonCart } from '../../molecules'
import { ProductList, ShoppingCart } from '../../organisms'
import { DefaultPage } from '../../templates'

const Featured = () => {

    return (
        <CartProvider>
            <DefaultPage name="Featured">
                <ProductList />
            </DefaultPage>            

            <ButtonCart />

            <ShoppingCart />

        </CartProvider>
    )
}

export default Featured
