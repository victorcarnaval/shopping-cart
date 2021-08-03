import React from 'react'
import PropTypes from 'prop-types'

import { useCartContext } from '../../../services/CartContext'

import styles from './ProductCart.module.css'
import { ProductImage, ProductName, ProductPrice, ButtonIcon } from '../../atoms'
import TrashImage from './trash.png'

const ProductCart = ({ id, image, name, price, stock }) => {
    const { addToCart, removeFromCart, getTotalProductInCart, removeAllFromCart } = useCartContext()
    const total = getTotalProductInCart(id)

    return (
        <div className={styles.productCart} data-id={id} data-stock={stock}>
            <div className={styles.productImage}>
                <ProductImage image={image} />
            </div>

            <div className={styles.productDescription}>
                <ProductName name={name} />
                <ProductPrice price={price} />
            </div>

            <div className={styles.productCartActions}>
                <ButtonIcon onClick={() => removeFromCart(id)}>-</ButtonIcon>

                <span>{total}</span>

                <ButtonIcon onClick={() => addToCart(id)}>+</ButtonIcon>

                <ButtonIcon onClick={() => removeAllFromCart(id)}>
                    <img src={TrashImage} alt="Ícone de lixeira" title="Removar produto" />
                </ButtonIcon>
            </div>
        </div>
    )
}

ProductCart.propTypes = {
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired
}

export default React.memo(ProductCart)
