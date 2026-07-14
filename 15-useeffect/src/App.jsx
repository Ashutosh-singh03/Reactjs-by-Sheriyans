import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  useEffect(function(){
    console.log("useefect running!")
  },[b])
  return (
    <div>
      {a} {b}
      <button onClick={()=>{
        setA(a+1)
      }}>
        button A
      </button>
      <button onClick={()=>{
        setB(b-1)
      }}>button B</button>
    </div>
  )
}

export default App