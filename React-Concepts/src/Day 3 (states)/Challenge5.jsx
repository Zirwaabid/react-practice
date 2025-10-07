
import React, { useState } from 'react'

function Challenge5() {
  const [walk, setWalk] = useState(true)
  const handleWalk = () => {
    setWalk(!walk)
    if (walk) {
      alert("Stop is Next")
    }
    else {
      alert("Walk is next")
    }
  }
  return (
    <div>
      <button onClick={handleWalk}>{walk ? "Change To Stop " : "Change To Walk"}</button>
      <h2 style={{ color: walk ? "darkGreen" : "darkRed" }}>{walk ? "Walk" : "Stop"}</h2>
    </div>
  )
}

export default Challenge5