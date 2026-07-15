import React from 'react'
import Navbar2 from './Navbar2'
import { useContext } from 'react'
import { themeDataContext } from '../context/ThemeContext'



const Navbar = () => {
  const [theme,setTheme]=useContext(themeDataContext)
  return (
    <div className={theme}>
        <h2></h2>
        <Navbar2/>
     </div>
  )
}

export default Navbar