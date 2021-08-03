import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [visible, setVisible] = useState(false)
    const [products, setProducts] = useState([])
    const [productsCart, setProductsCart] = useState({})

    useEffect(() => {
        fetch('https://5d6da1df777f670014036125.mockapi.io/api/v1/product')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => {
                console.log('Erro ao buscar os produtos da API', error)
            })
    }, [])

    const toggleCart = () => {
        setVisible(prevState => !prevState)
    }

    const addToCart = (id) => {
        setProductsCart(prevState => {
            const obj = { ...prevState }
            obj[id] = (obj[id] || 0) + 1
            return obj
        })
    }

    const removeFromCart = (id) => {
        setProductsCart(prevState => {
            const obj = { ...prevState }
            obj[id] = (obj[id] || 1) - 1

            if (obj[id] === 0) {
                delete obj[id]
            }
            return obj
        })
    }

    const removeAllFromCart = (id) => {
        setProductsCart(prevState => {
            const obj = { ...prevState }
            delete obj[id]
            return obj
        })
    }

    const totalProducts = products.length

    const totalProductsInCart = Object.values(productsCart).reduce((a, b) => a + b, 0)

    const totalDistinctProductsInCart = Object.keys(productsCart).length

    const productsInCart = Object.keys(productsCart).map(id => products.find(product => product.id === id))

    const getTotalProductInCart = id => productsCart[id]

    const STORE = {
        visible,
        products,
        productsInCart,
        totalProducts,
        totalProductsInCart,
        totalDistinctProductsInCart,
        toggleCart,
        addToCart,
        removeFromCart,
        getTotalProductInCart,
        removeAllFromCart
    }

    return (
        <CartContext.Provider value={STORE}>
            {children}
        </CartContext.Provider>
    )
}

const useCartContext = () => {
    const context = useContext(CartContext)
    return context
}

export { useCartContext, CartProvider }
