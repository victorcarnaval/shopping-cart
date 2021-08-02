import React from 'react'
import PropTypes from 'prop-types'

import styles from './ButtonIcon.module.css'

const ButtonIcon = ({ children, onClick }) => {

    return (
        <button
            type="button"
            className={styles.buttonIcon}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

ButtonIcon.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default ButtonIcon
