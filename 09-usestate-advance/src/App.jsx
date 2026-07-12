import React, { useState } from 'react'

const App = () => {
  const [Num, setNum] = useState({name:'sarthak',age:18})
  const [Arr, setArr] = useState([10,20,30,40])

  const user=()=>{
    const newNum={...Num};
    newNum.name='Aman'
    setNum(newNum)
    console.log(newNum)
  }

  const btnclicked=()=>{
    const newArr=[...Arr];
    newArr.push(99);
    console.log(newArr);
    setArr(newArr)
  }
  return (
    <div>
      <h3>{Num.name} , {Num.age}</h3>
      <button onClick={user}>click me</button>

      <div>
        <h2>{Arr}</h2>
        <button onClick={btnclicked}>click here</button>
      </div>
    </div>
  )
}

export default App