import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
   <div className='parent'>
    <Card user='Aman' age={18} img='https://images.unsplash.com/photo-1777385867395-8f22ba399501?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D' />
    <Card  user="Sarthak" age={21} img="https://images.unsplash.com/photo-1783586527548-f590b216529c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MHx8fGVufDB8fHx8fA%3D%3D" />
    <Card user="Aditya" age={23} img="https://images.unsplash.com/photo-1780598638311-39a40f7f69c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4NXx8fGVufDB8fHx8fA%3D%3D"/>
    </ div>
  )
}

export default App