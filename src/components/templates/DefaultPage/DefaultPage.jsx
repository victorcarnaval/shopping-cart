import React from 'react'
import PropTypes from 'prop-types'

import styles from './DefaultPage.module.css'
import { Container } from '../../atoms'
import { HeaderPage } from '../../organisms'

const DefaultPage = ({ name, children }) => (
    <>
        <HeaderPage name={name} />

        <section className={styles.content}>
            <Container>
                {children}
            </Container>
        </section>
    </>
)

DefaultPage.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default DefaultPage
