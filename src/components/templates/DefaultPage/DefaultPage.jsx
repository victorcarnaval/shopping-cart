import React from 'react'
import PropTypes from 'prop-types'

import styles from './DefaultPage.module.css'
import { ButtonCart } from '../../molecules'
import { HeaderPage } from '../../organisms'

const DefaultPage = ({ name, children }) => (
    <>
        <HeaderPage name={name} />

        <section className={styles.content}>
            {children}
        </section>

        <ButtonCart />
    </>
)

DefaultPage.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default DefaultPage
