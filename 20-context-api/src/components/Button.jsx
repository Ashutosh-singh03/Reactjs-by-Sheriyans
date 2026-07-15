import React from 'react'
import { useContext } from 'react'
import { themeDataContext } from '../context/ThemeContext'

const Button = () => {
 const [theme,setTheme]=useContext(themeDataContext);
 function changeTheme(){
    if(theme=='dark'){
        setTheme('light');
    }else{
        setTheme('dark');
    }
 }
  return (
    <div>
        <button onClick={changeTheme}>Change theme</button>
        </div>
  )
}

export default Button