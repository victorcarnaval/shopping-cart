import React from 'react'
import PropTypes from 'prop-types'

import styles from './ProductPrice.module.css'

const ProductPrice = ({ price }) => (
    <p className={styles.productPrice}>{`R$ ${price}`}</p>
)

ProductPrice.propTypes = {
    price: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired
}

export default React.memo(ProductPrice)
