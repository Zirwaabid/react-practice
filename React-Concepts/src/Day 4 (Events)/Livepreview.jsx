import React, { useState } from 'react'

function Livepreview() {
    const [name, setName] = useState("");
    const handleChange = (e) => {
        setName(e.target.value)
    }
    return (
        <div>
            <form>
                <input type="text" placeholder='enter your name' value={name} onChange={handleChange} />
            </form>
            <h1>Hi {name}</h1>
        </div>
    )
}

export default Livepreview