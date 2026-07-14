import React from 'react'
import axios from 'axios'
import { useState } from 'react';

const App = () => {

  const [data, setData] = useState([])

 async function fetchData(){
    const response= await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data=await response.json();
    console.log(data)
 }

  const getData=async()=>{
     const response=await axios.get("https://jsonplaceholder.typicode.com/todos/1");
     console.log(response.data)
  }

  const getdata=async()=>{
    const response=await axios.get("https://picsum.photos/v2/list");
    setData(response.data)
  }

  return (
    <div>
      <button onClick={getdata}>get data</button>
      <div>
        {data.map((elem,idx)=>{
         return <h1 key={idx}>{elem.author} {idx}</h1>
        })}
      </div>
    </div>
  )
}

export default App