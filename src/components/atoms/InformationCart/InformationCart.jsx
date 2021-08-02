import React from 'react'

import styles from './InformationCart.module.css'

const InformationCart = () => {
    const numberOfitems = 0

    return (
        <span className={styles.informationCart}>{numberOfitems}</span>
    )
}

export default React.memo(InformationCart)
