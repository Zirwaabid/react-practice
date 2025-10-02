import React, { useState } from 'react'
import { products } from './data'
import ProductCard from './ProductCard'
import { use } from 'react'
function ShoppingCart() {
    const [cart, setCart] = useState(products)
    const [searchItem, setSearchItem] = useState("")
    const filterCart = cart.filter(product =>
        product.name.toLowerCase().includes(searchItem.toLocaleLowerCase())
    )


    const handleRemove = (id) => {
        setCart(cart.filter(item =>
            item.id != id
        ))

    }
    const handleIncrease = (id) => {
        setCart(cart.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ))

    }

    const handleDescrease = (id) => {
        setCart(cart.map(item =>
            item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ))

    }
    const total = cart.reduce((accumulator, currentvalue) => accumulator + (currentvalue.price * currentvalue.quantity), 0)

    return (
        <div>
            <h1>Cart</h1>
            <input type="text" placeholder='Search Your items' value={searchItem} onChange={(e) => setSearchItem(e.target.value)} />
            {filterCart.map((product) => (
                <ProductCard {...product} key={product.id} handleRemove={handleRemove} handleIncrease={handleIncrease} handleDescrease={handleDescrease} />
            ))}

            <h3>Total Price: {total}</h3>
        </div>
    )
}

export default ShoppingCart