import React from 'react'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  function increaseNum(){
    setCount(prev=>(prev+1));
    setCount(prev=>(prev+1));
    setCount(prev=>(prev+1));
  }
  function decreaseNum(){
    setCount(count-1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>decrease</button>
    </div>
  )
}

export default App