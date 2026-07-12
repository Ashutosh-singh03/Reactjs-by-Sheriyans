import React from 'react'

const scroll = () => {
    const scrolling=(val)=>{
        console.log(val)
    }
  return (
    <div onWheel={(elem)=>{
       scrolling(elem.deltaY)
    }}>
        <div className="page1"></div>
        <div className="page2"></div>
    </div>
  )
}

export default scroll