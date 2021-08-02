import React from 'react'
import PropTypes from 'prop-types'

import styles from './Product.module.css'
import { ProductImage, ProductName, ProductPrice, Button } from '../../atoms'

const Product = ({ id, image, name, price, stock }) => {

    return (
        <div className={styles.product} data-id={id} data-stock={stock}>
            <div className={styles.productImage}>
                <ProductImage image={image} />
            </div>
            <div className={styles.productDescription}>
                <ProductName name={name} />
                <ProductPrice price={price} />
            </div>
            <div className={styles.productActions}>
                <Button text="Add to cart" onClick={() => console.log('clicked')} />
            </div>
        </div>
    )
}

Product.propTypes = {
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired
}

export default React.memo(Product)
