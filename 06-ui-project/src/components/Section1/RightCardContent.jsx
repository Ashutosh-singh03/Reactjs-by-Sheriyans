import React from 'react'

const RightCardContent = (props) => {
  return (
    <div>
          <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
            <h2 className='bg-white text-2xl font-semibold rounded-full h-11 w-11 flex justify-center items-center'>{props.id+1}</h2>
            <div>
                <p className='text-shadow-2xs text-xl text-white mb-8 leading-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita numquam explicabo aspernatur aliquid totam?</p>
                <div className='flex justify-between'>
                    <button style={{backgroundColor:props.color}} className= ' text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
                    <button style={{backgroundColor:props.color}} className='  text-white font-medium px-4 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightCardContent