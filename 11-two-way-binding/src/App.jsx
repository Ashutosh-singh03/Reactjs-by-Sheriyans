import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState("")

  const handleForm=(e)=>{
    e.preventDefault();
    console.log("Form submitted by ",title)
    setTitle('')
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        handleForm(e)
      }
      }>
        <input type="text" placeholder='Enter text' 
        value={title}
        onChange={(e)=>{
           setTitle(e.target.value)
        }} />
        <button>submit</button>
      </form>
    </div>
  )
}

export default App