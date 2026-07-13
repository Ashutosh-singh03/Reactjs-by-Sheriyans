import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")
  const [task, setTask] = useState([])

  const handleSubmit=(e)=>{
    e.preventDefault();
    const copyTask=[...task];

    copyTask.push({title,details});

    setTask(copyTask);

    console.log(copyTask)
   
    console.log("Form Submitted");
  }

  const deleteNotes=(idx)=>{
    const copyTask=[...task];

    copyTask.splice(idx,1);

    setTask(copyTask)
    
  }
  return (
    <div className=' h-screen lg:flex bg-black text-white '>
      <form onSubmit={(e)=>{
        handleSubmit(e);
        setTitle("")
        setDetails("")
      }}
       className='flex flex-col gap-4 items-start   p-10 lg:w-1/2'>

      <h1 className='text-3xl font-bold'>Your Notes</h1>

        <div className='flex gap-4 w-1/2 items-start flex-col'>

          <input type="text"
         placeholder='Enter Notes Heading' 
         className='px-5 w-full font-medium py-2 border-2 rounded outline-none'
         value={title}
         onChange={(e)=>{
          setTitle(e.target.value)
         }}
         />

        <textarea type="text" 
        placeholder='Write Details'
        className='px-5 h-32 w-full py-2 font-medium border-2 rounded'
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value)
        }}
        />

        <button className='px-5 py-2 w-full bg-white font-bold rounded text-black'>Add Notes</button>
       
        </div>
      </form>

      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-3xl font-bold'>Your Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto'>
         {task.map((elem,idx)=>{

            return <div key={idx} className=" flex flex-col justify-between items-start relative h-52 w-40 rounded-xl pt-9 pb-4 px-4 text-black bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOI0reQLJbYio3nDn-3Do7tojc55WBcflQZPNwCsBcg&s=10')] bg-cover bg-center">
             <div>
              <h3 className='leading-tight text-xl font-bold '>{elem.title}</h3>
              <p className='mt-3 leading-tight font-medium text-gray-400'>{elem.details}</p>
              </div>
              <button className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'
              onClick={()=>{
                deleteNotes(idx)
              }}
              >Delete</button>
             </div>

         })}
          
          
        </div>
      </div>
    </div>
  )
}

export default App