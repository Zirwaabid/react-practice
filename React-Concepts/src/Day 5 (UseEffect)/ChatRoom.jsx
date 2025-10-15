import React, { useEffect, useState } from 'react'
import createConnection from './createConnection';
function ChatRoom({ roomId }) {
    const [serverUrl, setServerurl] = useState("https://localhost:1234")
    useEffect(() => {
        const connection = createConnection(roomId, serverUrl);
        connection.connect();
        return () => {
            connection.disconnect()
        }
    }, [serverUrl, roomId])
    return (
        <div>
            <label>
                ServerUrl:
                <input type="text" value={serverUrl} onChange={(e) => { setServerurl(e.target.value) }} />
            </label>
                  <h1>Welcome to the {roomId} room!</h1>
        </div>
    )
}

export default ChatRoom