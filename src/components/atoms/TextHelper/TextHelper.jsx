import React from 'react'
import PropTypes from 'prop-types'

import styles from './TextHelper.module.css'

const TextHelper = ({ text }) => (
        <span className={styles.text}>{text}</span>
    )

TextHelper.propTypes = {
    text: PropTypes.string.isRequired
}

export default React.memo(TextHelper)
