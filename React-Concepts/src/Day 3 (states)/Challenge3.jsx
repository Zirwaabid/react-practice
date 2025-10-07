import React, { useState } from 'react'

function Challenge3() {
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState("")
    if (isSent) {
        return <h2>Thank You</h2>
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`sending: ${message}`)
        setIsSent(true)

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea placeholder='Type your message' value={message} onChange={e => setMessage(e.target.value)}></textarea>
                <br />
                <button type='submit'>Send</button>

            </form>

        </div>
    )
}

export default Challenge3