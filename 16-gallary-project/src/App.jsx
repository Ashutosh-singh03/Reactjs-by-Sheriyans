import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {

  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1)

  const getData=async()=>{
    const response= await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`);

    setUserData(response.data);
  }
 
  useEffect(function(){
    getData()
  },[index])

 let printUserData=<h1 className='text-gray-300 font-semibold text-xs absolute top-1/2
 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h1> 
 if(userData.length >0){
  printUserData=userData.map(function(elem,idx){
      return <div key={idx}>
        <div className='h-40 w-44 overflow-hidden bg-white rounded-xl'>
          <img className='h-full w-full object-cover ' src={elem.download_url} alt="" />
        </div>
        <h2 className='font-bold text-lg'>{elem.author}</h2>
      </div>
  })
 }

  return (
    <div className='bg-black h-screen overflow-auto p-4 text-white'>
      <div className='flex flex-wrap h-[82%] gap-4'>
        {printUserData}
      </div>
      <div className='flex justify-center gap-6 items-center p-4'>
         <button className='bg-amber-400 text-s cursor-pointer active:scale-95
         font-semibold text-black rounded px-4 py-2'
      onClick={()=>{
        if(index>1) {
          setIndex(index-1);
          setUserData([]);
        }
      }}
      >
        prev
      </button>
      <h3>Page {index}</h3>
      <button className='bg-amber-400 text-s cursor-pointer active:scale-95
         font-semibold text-black rounded px-4 py-2'
      onClick={()=>{
        setIndex(index+1);
      }}
      >
        next
      </button>
      </div>
    </div>
  )
}

export default App