import React from 'react'

const App = () => {

  const formHandle=(e)=>{
    e.preventDefault();
    console.log("form submitted")
  }

  return (
    <div>
      <form  onSubmit={(e)=>{
        formHandle(e);
      }}>
        <input type="text" placeholder='Enter your name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App