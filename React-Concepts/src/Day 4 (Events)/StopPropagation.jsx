import React from 'react'
const Button = ({ children, onClick }) => {
    return (
        <button onClick={e => { e.stopPropagation(); onClick() }}>{children}</button>
    )
}
function StopPropagation() {
    return (
        <div>
            <div onClick={() => alert("Byeeee...")}>
                <Button onClick={() => alert("Hello.....")}>
                    Say Hello
                </Button>
                <Button onClick={() => alert("Hi.....")}>
                    Say Hi
                </Button>

            </div>
        </div>
    )
}

export default StopPropagation