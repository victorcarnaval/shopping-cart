import React from 'react'
import PropTypes from 'prop-types'

import styles from './HeaderPage.module.css'
import { TextHeader, TextHelper } from '../../atoms'

const HeaderPage = ({ name }) => {

    return (
        <header className={styles.header}>
            <TextHeader text={name} theme="PRIMARY" />

            <div className={styles.headerActions}>
                <TextHelper text="ITEMS_PER_PAGE" />
            </div>
        </header>
    )
}

HeaderPage.propTypes = {
    name: PropTypes.string.isRequired
}

export default HeaderPage
