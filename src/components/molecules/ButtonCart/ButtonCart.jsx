import React from 'react'

import styles from './ButtonCart.module.css'
import { InformationCart } from '../../atoms'

const ButtonCart = () => {
    const icon = true ? 'emptyCart' : 'fullCart'

    return (
        <div className={`${styles.buttonCartWrapper} ${styles[icon]}`}>
            <button
                type="button"
                onClick={() => console.log('cart opened')}
                className={styles.buttonCart}
            />

            <div className={styles.buttonCartInfo}>
                <InformationCart />
            </div>            
        </div>
    )
}

export default React.memo(ButtonCart)