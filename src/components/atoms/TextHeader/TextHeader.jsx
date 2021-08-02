import React from 'react'
import PropTypes from 'prop-types'

import styles from './TextHeader.module.css'

const TextHeaderTheme = {
    DEFAULT: 'titleDefault',
    PRIMARY: 'titlePrimary'
}

const TextHeader = ({ theme, text }) => {
    const classnameTheme = TextHeaderTheme[theme]

    return (
        <h1 className={`${styles.title} ${styles[classnameTheme]}`}>{text}</h1>
    )
}

TextHeader.propTypes = {
    theme: PropTypes.oneOf(Object.keys(TextHeaderTheme)),
    text: PropTypes.string.isRequired
}

TextHeader.defaultProps = {
    theme: 'DEFAULT'
}

export default React.memo(TextHeader)
