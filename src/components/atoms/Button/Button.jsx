import React from 'react'
import PropTypes from 'prop-types'

import styles from './Button.module.css'

const ButtonTypes = {
    BUTTON: 'button',
    SUBMIT: 'submit'
}

const ButtonThemes = {
    DEFAULT: 'buttonDefault',
    PRIMARY: 'buttonPrimary'
}

const Button = ({ text, onClick, type, theme, disabled }) => {
    const classnameTheme = ButtonThemes[theme]

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${styles.button} ${styles[classnameTheme]}`}
        >
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    type: PropTypes.oneOf(Object.keys(ButtonTypes)),
    theme: PropTypes.oneOf(Object.keys(ButtonThemes)),
    disabled: PropTypes.bool
}

Button.defaultProps = {
    type: 'BUTTON',
    theme: 'DEFAULT',
    disabled: false
}

export default React.memo(Button)