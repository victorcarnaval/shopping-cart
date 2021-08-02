import React from 'react'
import PropTypes from 'prop-types'

import styles from './ProductImage.module.css'

const ProductImage = ({ image }) => (
    <img src={image} alt="Imagem do produto" className={styles.productImage} />
)

ProductImage.propTypes = {
    image: PropTypes.string.isRequired
}

export default React.memo(ProductImage)
