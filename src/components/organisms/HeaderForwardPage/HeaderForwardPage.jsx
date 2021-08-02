import React from 'react'
import PropTypes from 'prop-types'

import { useCartContext } from '../../../services/CartContext'

import styles from './HeaderForwardPage.module.css'
import { Container, TextHeader, TextHelper } from '../../atoms'
import LeftArrow from './left-arrow.png'

const HeaderForwardPage = ({ name }) => {
    const { totalDistinctProductsInCart, toggleCart } = useCartContext()

    return (
        <header className={styles.header}>
            <Container>
                <button
                    className={styles.headerPreviousButton}
                    onClick={toggleCart}
                >
                    <img src={LeftArrow} alt="Ícone para voltar" title="Fechar carrinho" />
                </button>

                <TextHeader text={name} />

                <div className={styles.headerActions}>
                    <TextHelper text={`${totalDistinctProductsInCart} items`} />
                </div>
            </Container>
        </header>
    )
}

HeaderForwardPage.propTypes = {
    name: PropTypes.string.isRequired
}

export default HeaderForwardPage
