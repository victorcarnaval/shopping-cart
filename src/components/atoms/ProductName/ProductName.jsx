import React from 'react'
import PropTypes from 'prop-types'

import styles from './ProductName.module.css'

const ProductName = ({ name }) => (
    <h2 className={styles.productName}>{name}</h2>
)

ProductName.propTypes = {
    name: PropTypes.string.isRequired
}

export default React.memo(ProductName)
