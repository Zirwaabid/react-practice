function RenderingProps() {
    return (
        <ToolBar onPlaying={() => alert("Playing")}
            onUploading={() => alert("Uploading")} />
    )
}

const ToolBar = ({ onPlaying, onUploading }) => {
    return (
        <div>
            <Button onClick={onPlaying}>
                Play Movie
            </Button>
            <Button onClick={onUploading}>
                Upload an Image
            </Button>

        </div>
    )
}
const Button = ({ onClick, children }) => {
    return (
        <button onClick={onClick}>{children}</button>

    )
}

export default RenderingProps