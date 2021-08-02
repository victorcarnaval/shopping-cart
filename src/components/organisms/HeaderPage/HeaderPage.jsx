import React from 'react'
import PropTypes from 'prop-types'

import { useCartContext } from '../../../services/CartContext'

import styles from './HeaderPage.module.css'
import { Container, TextHeader, TextHelper } from '../../atoms'

const HeaderPage = ({ name }) => {
    const { totalProducts } = useCartContext()

    return (
        <header className={styles.header}>
            <Container>
                <TextHeader text={name} theme="PRIMARY" />

                <div className={styles.headerActions}>
                    <TextHelper text={`${totalProducts} items listed`} />
                </div>
            </Container>
        </header>
    )
}

HeaderPage.propTypes = {
    name: PropTypes.string.isRequired
}

export default React.memo(HeaderPage)
