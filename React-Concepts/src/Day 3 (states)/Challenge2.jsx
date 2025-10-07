import React, { useState } from 'react'

function Challenge2() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const handleChangeFirst = (e) => {
        setFirstName(e.target.value)

    }
    const handleChangeLast = (e) => {
        setLastName(e.target.value)

    }
    const handleSubmit = () => {
        e.preventDefault();
    }
    const handleReset = () => {
        firstName = ""
        lastName = ""
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter your FirstName' value={firstName} onChange={handleChangeFirst} />
                <input type="text" placeholder='Enter your LastName' value={lastName} onChange={handleChangeLast} />
                <h1>Hi {firstName} {lastName}</h1>
                <button onClick={handleReset}>Reset</button>
            </form>
        </div>
    )
}

export default Challenge2