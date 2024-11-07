import { useState,useEffect } from 'react'
import './App.css'

function App() {

  const [cursor, setCursor] = useState({ x:0, y:0 })

  useEffect(()=>{
     window.addEventListener('mousemove', (e)=>{
        setCursor({ x:e.clientX, y:e.clientY})
     })
  })

  const thissyle = {
    position : 'absolute',
    left: cursor.x -10,
    top: cursor.y -50,
  }
 

  return (
    <>
    <div className="container">
      <div className="cursor" style={thissyle} ></div>
    </div>
    </>
  )
}

export default App
