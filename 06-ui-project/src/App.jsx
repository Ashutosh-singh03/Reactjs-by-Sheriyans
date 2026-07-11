import React from 'react'
import Section1 from './components/Section1/Section1'

import Navbar from './components/Section1/Navbar'
import Page1Content from './components/Section1/Page1Content'

const App = () => {
  const user=[
    {
      img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     intro:"",
     color:"royalblue",
     tag:"Satisfied"
    },
    {
      img:"https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
     intro:"",
     color:"lightseagreen",
     tag:"Underserved"},
    {
      img:"https://images.unsplash.com/photo-1555421689-43cad7100750?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
     intro:"",
     color:"pink",
     tag:"Underbanked"
    },
    {
      img:"https://images.unsplash.com/photo-1783094269388-0a7a2efbd4cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
     intro:"",
     color:"lightblue",
     tag:"Average"
    },
    {
      img:"https://plus.unsplash.com/premium_photo-1672691612717-954cdfaaa8c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
     intro:"",
     color:"black",
     tag:"Underreserved"
    }
  ]
  return (
    <div >
      <Navbar/>
     <Section1 users={user} />
    </div>
  )
}

export default App