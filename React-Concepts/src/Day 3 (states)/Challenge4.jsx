import React from 'react'

function Challenge4() {
    const handleClick = () => {
        const Name = prompt("What is your Name?");
        alert(`Hello ${Name}`)
    }
    return (
        <div>
            <button onClick={handleClick}>Greet</button>
        </div>
    )
}

export default Challenge4