import React, { useState } from 'react'
import ChatRoom from './ChatRoom';

function Connection() {
    const [roomId, setRoomId] = useState("general");
    const [show, setShow] = useState(false);
    const handleChange = () => {
        setShow(!show)
    }
    return (
        <div>
            <label>
                Choose the Chat Room: {''}
                <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
                    <option value="general">general</option>
                    <option value="travel">travel</option>
                    <option value="music">music</option>
                </select>
            </label>
            <button onClick={handleChange}>{show ? "close Chat" : "open Chat"}</button>
            {show && <ChatRoom roomId={roomId} />}
        </div>
    )
}

export default Connection