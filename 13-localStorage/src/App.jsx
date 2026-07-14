import React from 'react'

const App = () => {

  const user={
    name:"Sarthak",
    age:18,
    profession:"Teacher"
  }

  localStorage.setItem('user',JSON.stringify(user))

  const users=JSON.parse(localStorage.getItem('user'))
  console.log(users)
  return (
    <div>App</div>
  )
}

export default App