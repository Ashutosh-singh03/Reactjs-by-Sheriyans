import React from 'react'
import Scroll from './components/scroll.jsx'

const App = () => {
  function btn(){
    console.log("btn clicked")
  }

function inputChange(val){
  console.log(val)
}

  return (
    <div>
      <button onClick={btn}>click here</button>
      <button onClick={function(){
          console.log("clicked")
      }}>click me</button>

      <input onChange={function(elem){
        inputChange(elem.target.value)
      }} type="text" />

      <div  onMouseMove={()=>{
        console.log("nachooooo")
      }} className='box'>

      </div>
     <Scroll/>
    </div>
  )
}

export default App