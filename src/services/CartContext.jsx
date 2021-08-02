import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext()

const fakeData = [{ "id": "1", "createdAt": "2019-09-02T12:58:54.103Z", "name": "Rustic Metal Fish", "price": "289.00", "image": "http://lorempixel.com/640/480/food", "stock": 65171 }, { "id": "2", "createdAt": "2019-09-02T07:59:58.181Z", "name": "Sleek Wooden Soap", "price": "430.00", "image": "http://lorempixel.com/640/480/transport", "stock": 91260 }, { "id": "3", "createdAt": "2019-09-02T22:14:05.454Z", "name": "Small Cotton Shoes", "price": "993.00", "image": "http://lorempixel.com/640/480/sports", "stock": 36608 }, { "id": "4", "createdAt": "2019-09-02T07:36:56.139Z", "name": "Ergonomic Frozen Towels", "price": "259.00", "image": "http://lorempixel.com/640/480/nightlife", "stock": 92065 }, { "id": "5", "createdAt": "2019-09-02T05:18:30.393Z", "name": "Awesome Metal Pants", "price": "69.00", "image": "http://lorempixel.com/640/480/sports", "stock": 54930 }, { "id": "6", "createdAt": "2019-09-02T16:22:03.725Z", "name": "Intelligent Cotton Bacon", "price": "14.00", "image": "http://lorempixel.com/640/480/fashion", "stock": 88996 }, { "id": "7", "createdAt": "2019-09-02T02:26:28.018Z", "name": "Ergonomic Plastic Tuna", "price": "477.00", "image": "http://lorempixel.com/640/480/food", "stock": 73117 }, { "id": "8", "createdAt": "2019-09-02T14:25:31.508Z", "name": "Intelligent Soft Keyboard", "price": "764.00", "image": "http://lorempixel.com/640/480/nature", "stock": 14875 }, { "id": "9", "createdAt": "2019-09-02T11:52:19.177Z", "name": "Awesome Cotton Keyboard", "price": "575.00", "image": "http://lorempixel.com/640/480/transport", "stock": 55458 }, { "id": "10", "createdAt": "2019-09-02T02:17:08.337Z", "name": "Small Fresh Shoes", "price": "67.00", "image": "http://lorempixel.com/640/480/fashion", "stock": 38268 }, { "id": "11", "createdAt": "2019-09-02T04:41:05.149Z", "name": "Fantastic Metal Cheese", "price": "312.00", "image": "http://lorempixel.com/640/480/technics", "stock": 43921 }, { "id": "12", "createdAt": "2019-09-02T12:39:09.964Z", "name": "Generic Granite Bike", "price": "345.00", "image": "http://lorempixel.com/640/480/people", "stock": 77846 }, { "id": "13", "createdAt": "2019-09-02T06:35:40.678Z", "name": "Tasty Granite Computer", "price": "585.00", "image": "http://lorempixel.com/640/480/business", "stock": 67599 }]

const CartProvider = ({ children }) => {
    const [visible, setVisible] = useState(false)
    const [products, setProducts] = useState(fakeData)
    const [productsCart, setProductsCart] = useState({})

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
        getTotalProductInCart
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
