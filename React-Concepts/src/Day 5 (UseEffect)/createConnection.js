export default function createConnection(roomdId, serverUrl) {
    return {
        connect() {
            console.log(`Connecting to ${roomdId} room at ${serverUrl}`)
        },

        disconnect() {
            console.log(`Disconnecting from ${roomdId} room at ${serverUrl}`)
        }
    }
}