import React, {useState} from "react"
import "./Button.scss"

export default function Button() {
    
  const [count, setCount] = useState(0)

  return (
    <div className="Button">
      <button onClick={()=>setCount(count + 1)}>Click {count}</button>
    </div>
  )
}