import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    const handleIncrease = () => {
        setCount(count + 1)
    }
    const handleDescrease = () => {
        setCount(count - 1)
    }
    const handleReset = () => {
        setCount(0)
    }
    return (
        <div style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
            <h2>Count : {count}</h2>
            <div>
                <button style={{ padding: "14PX", borderRadius: "1rem", backgroundColor: "hotpink" }} onClick={handleIncrease}>+1</button>
            </div>
            <div>
                <button style={{ padding: "14PX", borderRadius: "1rem", backgroundColor: "yellow" }} onClick={handleDescrease}>-1</button>
            </div>
            <div>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}

export default Counter