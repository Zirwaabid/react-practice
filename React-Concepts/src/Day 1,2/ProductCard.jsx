import React, { useState } from 'react'


function ProductCard({ name, price, quantity, id, handleRemove, handleIncrease, handleDescrease }) {

    return (
        <div key={id} className='card'>

            <h3>
                {name}
            </h3>
            <p>
                <b>Price : </b> {price}
            </p>
            <p>
                <b>Quantity : </b> {quantity}
                <button onClick={() => handleIncrease(id)}>+</button>
                <button onClick={() => handleDescrease(id)}>-</button>

            </p>
            <button onClick={() => handleRemove(id)} >Remove</button>
        </div>

    )
}

export default ProductCard